import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type UpcomingChallenge = {
  id: string;
  title: string;
  date: string;
  time: string;
  participants: number;
  type: 'tournament' | 'event' | 'competition';
};

const upcomingChallenges: UpcomingChallenge[] = [
  {
    id: '1',
    title: 'Speed Run Tournament',
    date: 'June 15, 2023',
    time: '18:00 UTC',
    participants: 128,
    type: 'tournament'
  },
  {
    id: '2',
    title: 'Memory Masters Competition',
    date: 'June 18, 2023',
    time: '20:00 UTC',
    participants: 64,
    type: 'competition'
  },
  {
    id: '3',
    title: 'Reflex Challenge Event',
    date: 'June 22, 2023',
    time: '19:00 UTC',
    participants: 256,
    type: 'event'
  }
];

const typeColors = {
  tournament: 'bg-primary/20 text-primary',
  event: 'bg-accent/20 text-accent',
  competition: 'bg-secondary/20 text-secondary'
};

const UpcomingChallenges = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {upcomingChallenges.map((challenge) => (
            <div key={challenge.id} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pb-6 border-b border-border last:border-0 last:pb-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium">{challenge.title}</h4>
                  <Badge className={typeColors[challenge.type]}>
                    {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{challenge.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{challenge.time}</span>
                  </div>
                  
                  <div>
                    {challenge.participants} participants registered
                  </div>
                </div>
              </div>
              
              <Button className="gradient-button mt-2 sm:mt-0">
                Register
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingChallenges;
