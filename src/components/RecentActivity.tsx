import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Activity = {
  id: string;
  type: 'challenge_completed' | 'achievement_unlocked' | 'level_up' | 'friend_activity';
  title: string;
  description: string;
  timestamp: string;
  xp?: number;
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'challenge_completed',
    title: 'Speed Run Challenge Completed',
    description: 'You completed the Speed Run challenge in 28 seconds',
    timestamp: '2 hours ago',
    xp: 250
  },
  {
    id: '2',
    type: 'achievement_unlocked',
    title: 'Achievement Unlocked: Speed Demon',
    description: 'Complete a speed challenge in under 30 seconds',
    timestamp: '2 hours ago',
    xp: 500
  },
  {
    id: '3',
    type: 'level_up',
    title: 'Level Up!',
    description: 'You reached Level 18',
    timestamp: '1 day ago',
    xp: 1000
  },
  {
    id: '4',
    type: 'friend_activity',
    title: 'QuantumGamer beat your high score',
    description: 'In Memory Matrix challenge by 120 points',
    timestamp: '2 days ago'
  },
  {
    id: '5',
    type: 'challenge_completed',
    title: 'Memory Matrix Challenge Completed',
    description: 'You scored 840 points in Memory Matrix',
    timestamp: '3 days ago',
    xp: 320
  }
];

const typeColors = {
  challenge_completed: 'bg-primary/20 text-primary',
  achievement_unlocked: 'bg-accent/20 text-accent',
  level_up: 'bg-secondary/20 text-secondary',
  friend_activity: 'bg-muted text-muted-foreground'
};

const RecentActivity = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div className="relative">
                <div className={`h-10 w-10 rounded-full ${typeColors[activity.type]} flex items-center justify-center`}>
                  <Clock className="h-5 w-5" />
                </div>
                <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border"></div>
              </div>
              
              <div className="flex-1 pb-6 border-b border-border">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                
                {activity.xp && (
                  <Badge className="mt-2 bg-secondary/20 text-secondary">
                    +{activity.xp} XP
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
