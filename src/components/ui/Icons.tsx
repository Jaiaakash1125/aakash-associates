import {
  BookOpen, FileText, ReceiptText, ShieldCheck, BarChart3, Building2,
  Monitor, FileCheck, ClipboardList, Users, PieChart,
  ArrowRight, Phone, Mail, MapPin, MessageCircle, CheckCircle,
  GraduationCap, Briefcase, Star, ChevronRight, Menu, X,
  Calculator, TrendingUp, Award, Target,
  type LucideIcon,
} from 'lucide-react';

// Central icon map for dynamic icon rendering from string names
const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen, FileText, ReceiptText, ShieldCheck, BarChart3, Building2,
  Monitor, FileCheck, ClipboardList, Users, PieChart,
  ArrowRight, Phone, Mail, MapPin, MessageCircle, CheckCircle,
  GraduationCap, Briefcase, Star, ChevronRight, Menu, X,
  Calculator, TrendingUp, Award, Target,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

export {
  BookOpen, FileText, ReceiptText, ShieldCheck, BarChart3, Building2,
  Monitor, FileCheck, ClipboardList, Users, PieChart,
  ArrowRight, Phone, Mail, MapPin, MessageCircle, CheckCircle,
  GraduationCap, Briefcase, Star, ChevronRight, Menu, X,
  Calculator, TrendingUp, Award, Target,
};
