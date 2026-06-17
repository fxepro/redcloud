import {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  Car,
  Clapperboard,
  ClipboardList,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LifeBuoy,
  Megaphone,
  PenTool,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Trophy,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Activity, BarChart3, Boxes, Building2, Car, Clapperboard, ClipboardList, Cloud,
  Code2, Compass, Cpu, Database, Factory, GraduationCap, HeartHandshake, Landmark,
  LifeBuoy, Megaphone, PenTool, Rocket, Settings, ShieldCheck, Sparkles, Stethoscope,
  Target, Trophy, Truck, Users, UtensilsCrossed, Wrench,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Code2;
  return <Cmp className={className} />;
}

// Pick a relevant icon from free text (core-service titles/descriptions).
const KEYWORDS: [RegExp, string][] = [
  [/maintenance|repair|tuning/i, "Wrench"],
  [/supply|logistic|inventory|fleet|shipping/i, "Truck"],
  [/customer|crm|relationship|engagement|donor|member|patient|guest|fan|student/i, "Users"],
  [/analytic|report|data|insight|kpi|forecast|monitor/i, "BarChart3"],
  [/security|compliance|risk|fraud|protect/i, "ShieldCheck"],
  [/cloud|infrastructure|deploy|hosting|server/i, "Cloud"],
  [/training|education|learning|onboard/i, "GraduationCap"],
  [/marketing|campaign|seo|advertis|content|brand/i, "Megaphone"],
  [/payment|finance|billing|revenue|fund|donation/i, "Landmark"],
  [/ai|machine learning|automat|predictive|intelligent/i, "Cpu"],
  [/design|ux|interface|creative|production/i, "PenTool"],
  [/management|operation|process|workflow|planning|scheduling/i, "ClipboardList"],
  [/performance|optimiz|monitoring|uptime/i, "Activity"],
  [/integration|api|system|platform|erp/i, "Settings"],
  [/database|migration|storage/i, "Database"],
  [/strategy|consult|roadmap|goal/i, "Target"],
];

export function iconForText(text: string): string {
  for (const [re, name] of KEYWORDS) if (re.test(text)) return name;
  return "Sparkles";
}
