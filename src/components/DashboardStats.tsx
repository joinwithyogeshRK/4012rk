import { Activity, Award, Trophy, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  positive?: boolean;
};

const stats = [
  {
    title: 'Challenges Completed',
    value: 42,
    icon: <Activity className="h-5 w-5" />,
    change: '+12%',
    positive: true
  },
  {
    title: 'Current Level',
    value: 18,
    icon: <Award className="h-5 w-5" />,
    change: '+3',
    positive: true
  },
  {
    title: 'Global Rank',
    value: '#1,248',
    icon: <Trophy className="h-5 w-5" />,
    change: '-156',
    positive: true
  },
  {
    title: 'Achievements',
    value: '24/50',
    icon: <Trophy className="h-5 w-5" />,
    change: '+2',
    positive: true
  },
  {
    title: 'Reaction Time',
    value: '215ms',
    icon: <Zap className="h-5 w-5" />,
    change: '-8ms',
    positive: true
  },
  {
    title: 'Friends',
    value: 28,
    icon: <Users className="h-5 w-5" />,
    change: '+3',
    positive: true
  }
];

const StatCard = ({ title, value, icon, change, positive }: StatCardProps) => {
  return (
    <Card className="glass-card hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-muted-foreground text-sm mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        {change && (
          <div className="flex items-center">
            <span className={`text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground ml-1">vs last week</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
      
      <Card className="glass-card col-span-1 md:col-span-2 lg:col-span-3">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Level Progress</h3>
          
          <div className="flex items-center mb-2">
            <span className="text-lg font-medium mr-2">Level 18</span>
            <Progress value={65} className="flex-1 h-2 bg-muted" />
            <span className="text-lg font-medium ml-2">Level 19</span>
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>6,500 XP</span>
            <span>3,500 XP needed</span>
            <span>10,000 XP</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
