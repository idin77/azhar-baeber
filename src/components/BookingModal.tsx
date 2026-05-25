import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PACKAGES, BARBERS, TIME_SLOTS, CONTACT_INFO } from '../data';
import { Service, PricePackage, Booking } from '../types';
import LucideIcon from './LucideIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedPackageId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedServiceId = '',
  preselectedPackageId = '',
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(preselectedServiceId);
  const [selectedPackage, setSelectedPackage] = useState(preselectedPackageId);
  const [selectedBarber, setSelectedBarber] = useState(BARBERS[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingsHistory, setBookingsHistory] = useState<Booking[]>([]);
  const [step, setStep] = useState<1 | 2>(1); // 1: Form, 2: History/Success

  // Set today's date formatted as YYYY-MM-DD for the minimum date
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
    if (preselectedPackageId) {
      setSelectedPackage(preselectedPackageId);
    }
  }, [preselectedServiceId, preselectedPackageId, isOpen]);

  // Load booking history from local storage
  useEffect(() => {
    const cached = localStorage.getItem('azhar_bookings_history');
    if (cached) {
      try {
        setBookingsHistory(JSON.parse(cached));
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !selectedDate || !selectedTime) {
      alert('Silakan lengkapi semua data formulir!');
      return;
    }

    const serviceObj = SERVICES.find(s => s.id === selectedService);
    const packageObj = PACKAGES.find(p => p.id === selectedPackage);

    const serviceName = serviceObj ? serviceObj.name : 'Custom Service';
    const packageName = packageObj ? ` (${packageObj.name})` : '';
    const fullServiceName = `${serviceName}${packageName}`;

    // 1. Construct WhatsApp Message URL
    const message = `Halo Azhar Barbershop, saya ingin melakukan reservasi/booking:\n\n` +
      `👤 Nama: *${name}*\n` +
      `📞 No Handphone: *${phone}*\n` +
      `💈 Layanan: *${fullServiceName}*\n` +
      `💇‍♂️ Barber: *${selectedBarber}*\n` +
      `🗓️ Tanggal: *${selectedDate}*\n` +
      `⏰ Jam: *${selectedTime}*\n\n` +
      `Apakah slot waktu tersebut masih tersedia? Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285886752081?text=${encodedMessage}`;

    // 2. Save Booking to Local History
    const newBooking: Booking = {
      id: `book-${Date.now()}`,
      name,
      phone,
      serviceId: selectedService,
      packageId: selectedPackage || undefined,
      date: selectedDate,
      time: selectedTime,
      barber: selectedBarber,
      status: 'pending'
    };

    const updatedHistory = [newBooking, ...bookingsHistory];
    localStorage.setItem('azhar_bookings_history', JSON.stringify(updatedHistory));
    setBookingsHistory(updatedHistory);

    // 3. Open WhatsApp link
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // 4. Move to Success state / step 2
    setStep(2);
  };

  const clearHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat booking lokal?')) {
      localStorage.removeItem('azhar_bookings_history');
      setBookingsHistory([]);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          id="modal-backdrop"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden bg-dark-card border border-dark-gold-border rounded-xl shadow-2xl z-10 font-sans gold-glow"
          id="booking-form-modal"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-dark-border bg-black/40">
            <div className="flex items-center space-x-2">
              <span className="text-gold p-1 bg-gold/10 rounded-lg">
                <LucideIcon name="Calendar" size={24} />
              </span>
              <h2 className="text-xl font-display font-semibold tracking-wide text-white">
                RESERVASI / BOOKING ONLINE
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gold transition-colors duration-200 p-1.5 hover:bg-white/5 rounded-full"
              id="close-modal-button"
            >
              <LucideIcon name="X" size={20} />
            </button>
          </div>

          {/* Quick Step Tabs */}
          <div className="grid grid-cols-2 text-center text-sm border-b border-dark-border font-display">
            <button
              onClick={() => setStep(1)}
              className={`py-3 font-medium transition-all ${
                step === 1
                  ? 'text-gold border-b-2 border-gold bg-gold/5'
                  : 'text-gray-400 hover:text-white bg-transparent'
              }`}
              id="tab-booking-form"
            >
              Formulir Reservasi
            </button>
            <button
              onClick={() => setStep(2)}
              className={`py-3 font-medium transition-all flex justify-center items-center space-x-2 ${
                step === 2
                  ? 'text-gold border-b-2 border-gold bg-gold/5'
                  : 'text-gray-400 hover:text-white bg-transparent'
              }`}
              id="tab-booking-history"
            >
              <span>Riwayat Booking Anda</span>
              {bookingsHistory.length > 0 && (
                <span className="bg-gold text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {bookingsHistory.length}
                </span>
              )}
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {step === 1 ? (
              <form onSubmit={handleBookingSubmit} className="space-y-5" id="form-booking">
                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 select-none">
                        <LucideIcon name="User" size={18} />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Thoriq Sadzily"
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-200"
                        id="booking-input-name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      No. WhatsApp *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 select-none">
                        <LucideIcon name="Phone" size={18} />
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 085886752081"
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-200"
                        id="booking-input-phone"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Layanan Utama
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="Scissors" size={18} />
                      </span>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-10 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold appearance-none transition duration-200 select-custom"
                        id="booking-select-service"
                      >
                        <option value="">-- Pilih Layanan Satuan --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} (Rp{s.price.toLocaleString('id-ID')})
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="ChevronDown" size={16} />
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Atau Pilih Paket Hemat
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="Sparkles" size={18} />
                      </span>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-10 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold appearance-none transition duration-200 select-custom"
                        id="booking-select-package"
                      >
                        <option value="">-- Pilih Paket Harga (Opsional) --</option>
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} (Rp{p.price.toLocaleString('id-ID')})
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="ChevronDown" size={16} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barber and Schedule Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Barber Selector */}
                  <div className="md:col-span-1">
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Pilih Barber
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="User" size={18} />
                      </span>
                      <select
                        value={selectedBarber}
                        onChange={(e) => setSelectedBarber(e.target.value)}
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-10 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold appearance-none transition duration-200 select-custom"
                        id="booking-select-barber"
                      >
                        {BARBERS.map((barber) => (
                          <option key={barber} value={barber}>
                            {barber}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="ChevronDown" size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="md:col-span-1">
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Pilih Tanggal *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gold/80 pointer-events-none">
                        <LucideIcon name="Calendar" size={18} />
                      </span>
                      <input
                        type="date"
                        required
                        min={today}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition duration-200"
                        id="booking-input-date"
                      />
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div className="md:col-span-1">
                    <label className="block text-xs font-display font-medium text-gold uppercase tracking-wider mb-2">
                      Pilih Jam *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="Clock" size={18} />
                      </span>
                      <select
                        required
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-black/60 border border-dark-border rounded-lg py-2.5 pl-10 pr-10 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold appearance-none transition duration-200 select-custom"
                        id="booking-select-time"
                      >
                        <option value="">-- Pilih Jam --</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot} WIB
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                        <LucideIcon name="ChevronDown" size={16} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Informative Note */}
                <div className="p-4 bg-gold/5 border border-dark-gold-border rounded-lg text-xs leading-relaxed text-gray-300 flex items-start space-x-2.5">
                  <span className="text-gold mt-0.5">
                    <LucideIcon name="Info" size={16} />
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Bagaimana cara kerja Booking Online?</p>
                    <p>Setelah menekan tombol kirim di bawah, Anda akan diarahkan langsung ke WhatsApp Azhar Barbershop dengan format pesan yang sudah otomatis terisi. Cukup kirim pesan tersebut untuk konfirmasi slot Anda.</p>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-transparent hover:bg-white/5 border border-gray-700 text-gray-300 font-display font-medium text-sm py-3 px-4 rounded-lg transition duration-200"
                    id="booking-cancel-button"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-2 gold-gradient hover:opacity-90 text-black font-display font-bold text-sm py-3 px-4 rounded-lg shadow-lg hover:shadow-gold/20 flex items-center justify-center space-x-2 transition duration-200 cursor-pointer"
                    id="booking-submit-button"
                  >
                    <span>Kirim & Hubungi via WhatsApp</span>
                    <LucideIcon name="MessageSquare" size={18} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 py-4" id="booking-history-container">
                {bookingsHistory.length === 0 ? (
                  <div className="text-center py-10 text-gray-400 space-y-3">
                    <div className="inline-block p-4 bg-gray-900 rounded-full text-gray-600">
                      <LucideIcon name="CalendarOff" size={40} />
                    </div>
                    <p className="font-display font-medium text-white text-base">Belum Ada Riwayat Booking</p>
                    <p className="text-xs max-w-sm mx-auto">
                      Semua booking lokal yang Anda rancang lewat browser ini akan tercatat di sini agar mudah dicek kembali.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="mt-2 text-xs text-gold border-b border-gold hover:text-gold-300 hover:border-gold-300 transition"
                      id="booking-go-to-form"
                    >
                      Mulai Buat Booking Baru
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-dark-border">
                      <p className="text-xs text-gray-400">
                        Menampilkan <span className="text-gold font-bold">{bookingsHistory.length}</span> data booking lokal Anda.
                      </p>
                      <button
                        onClick={clearHistory}
                        className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1 underline transition cursor-pointer"
                        id="booking-clear-history-btn"
                      >
                        <LucideIcon name="Trash2" size={13} />
                        <span>Hapus Semua</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {bookingsHistory.map((book) => {
                        const sObj = SERVICES.find(s => s.id === book.serviceId);
                        const pObj = PACKAGES.find(p => p.id === book.packageId);
                        return (
                          <div
                            key={book.id}
                            className="bg-black/40 border border-dark-border rounded-lg p-4 space-y-2 hover:border-dark-gold-border transition"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-display font-semibold text-white text-sm">
                                  {book.name}
                                </h4>
                                <p className="text-xs text-gray-400">Phone: {book.phone}</p>
                              </div>
                              <span className="bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Whatsapp Sent
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-dark-border/40 text-xs">
                              <p className="text-gray-400">
                                Layanan:{' '}
                                <span className="text-white font-medium">
                                  {sObj ? sObj.name : 'Custom'}{' '}
                                  {pObj ? `(${pObj.name})` : ''}
                                </span>
                              </p>
                              <p className="text-gray-400">
                                Barber:{' '}
                                <span className="text-white font-medium">{book.barber}</span>
                              </p>
                              <p className="text-gray-400">
                                Tanggal:{' '}
                                <span className="text-white font-medium">{book.date}</span>
                              </p>
                              <p className="text-gray-400">
                                Jam:{' '}
                                <span className="text-white font-medium">{book.time} WIB</span>
                              </p>
                            </div>

                            <div className="flex justify-end pt-2">
                              <button
                                onClick={() => {
                                  // Re-send to WhatsApp
                                  const serviceName = sObj ? sObj.name : 'Custom Service';
                                  const packageName = pObj ? ` (${pObj.name})` : '';
                                  const fullServiceName = `${serviceName}${packageName}`;
                                  const msg = `Halo Azhar Barbershop, saya ingin melakukan reservasi/booking:\n\n` +
                                    `👤 Nama: *${book.name}*\n` +
                                    `📞 No Handphone: *${book.phone}*\n` +
                                    `💈 Layanan: *${fullServiceName}*\n` +
                                    `💇‍♂️ Barber: *${book.barber}*\n` +
                                    `🗓️ Tanggal: *${book.date}*\n` +
                                    `⏰ Jam: *${book.time}*\n\n` +
                                    `Apakah slot waktu tersebut masih tersedia? Terima kasih!`;
                                  window.open(`https://wa.me/6285886752081?text=${encodeURIComponent(msg)}`, '_blank');
                                }}
                                className="text-[11px] text-gold hover:text-white flex items-center space-x-1 bg-gold/5 hover:bg-gold/20 px-2.5 py-1 rounded transition border border-gold/20"
                              >
                                <LucideIcon name="Send" size={11} />
                                <span>Kirim Ulang Pesan</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
