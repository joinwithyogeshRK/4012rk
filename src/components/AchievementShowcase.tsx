import { useNavigate } from 'react-router-dom';
import { Trophy, Medal, Award, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  progress?: number;
};

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'First Victory',
    description: 'Complete your first challenge successfully',
    icon: <Trophy className="h-6 w-6" />,
    rarity: 'common',
    unlocked: true
  },
  {
    id: '2',
    title: 'Speed Demon',
    description: 'Complete a speed challenge in under 30 seconds',
    icon: <Medal className="h-6 w-6" />,
    rarity: 'rare',
    unlocked: true
  },
  {
    id: '3',
    title: 'Memory Master',
    description: 'Achieve a perfect score in a memory challenge',
    icon: <Award className="h-6 w-6" />,
    rarity: 'epic',
    unlocked: false,
    progress: 75
  },
  {
    id: '4',
    title: 'Legendary Gamer',
    description: 'Complete all challenges in the extreme difficulty',
    icon: <Crown className="h-6 w-6" />,
    rarity: 'legendary',
    unlocked: false,
    progress: 30
  }
];

const rarityColors = {
  common: 'from-gray-400 to-gray-300',
  rare: 'from-blue-500 to-blue-400',
  epic: 'from-purple-500 to-purple-400',
  legendary: 'from-yellow-500 to-yellow-400'
};

const AchievementShowcase = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Achievement</span> Showcase
          </h2>
          <Button 
            variant="outline" 
            className="border-primary/50 bg-transparent hover:bg-primary/20"
            onClick={() => navigate('/achievements')}
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="glass-card p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className={cn(
                  'achievement-badge',
                  `bg-gradient-to-br ${rarityColors[achievement.rarity]}`,
                  !achievement.unlocked && 'opacity-50'
                )}>
                  {achievement.icon}
                </div>
                
                <div className="stats-badge">
                  {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground mb-4">{achievement.description}</p>
              
              {achievement.unlocked ? (
                <div className="pulse-glow neon-border p-2 rounded-lg text-center text-sm font-medium text-primary">
                  Unlocked
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
