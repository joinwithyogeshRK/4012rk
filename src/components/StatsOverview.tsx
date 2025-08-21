import { Activity, Award, Users, Zap } from 'lucide-react';
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
    icon: <Users className="h-5 w-5" />,
    change: '-156',
    positive: true
  },
  {
    title: 'Reaction Time',
    value: '215ms',
    icon: <Zap className="h-5 w-5" />,
    change: '-8ms',
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

const StatsOverview = () => {
  return (
    <section className="py-16 px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Your <span className="text-gradient">Progress</span>
            </h2>
            <p className="text-muted-foreground">Track your gaming performance and achievements</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="mr-4">
              <p className="text-sm text-muted-foreground mb-1">Level Progress</p>
              <div className="flex items-center">
                <span className="text-lg font-medium mr-2">18</span>
                <Progress value={65} className="w-32 h-2 bg-muted" />
                <span className="text-lg font-medium ml-2">19</span>
              </div>
            </div>
            <div className="stats-badge">65% Complete</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
