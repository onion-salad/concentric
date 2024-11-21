import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementCardProps {
  title: string;
  Icon: LucideIcon;
}

const AchievementCard = ({ title, Icon }: AchievementCardProps) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm border-accent/20 shadow-lg hover:shadow-xl h-full">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-lg font-medium">{title}</span>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;