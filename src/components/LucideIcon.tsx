import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className, size = 24 }: LucideIconProps) {
  // Map strings to their respective Lucide icons as a fallback
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default icon like HelpCircle if not found
    const HelpIcon = (Icons as any)['HelpCircle'];
    return HelpIcon ? <HelpIcon className={className} size={size} /> : null;
  }
  
  return <IconComponent className={className} size={size} />;
}
