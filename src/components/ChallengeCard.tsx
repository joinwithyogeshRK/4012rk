import { useNavigate } from 'react-router-dom';
import { Clock, Users, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ChallengeCardProps = {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  type: 'speed' | 'memory' | 'reflex' | 'strategy';
  players: number;
  duration: number;
  image: string;
  popular?: boolean;
  compact?: boolean;
};

const difficultyColors = {
  easy: 'bg-green-500/20 text-green-500',
  medium: 'bg-yellow-500/20 text-yellow-500',
  hard: 'bg-orange-500/20 text-orange-500',
  extreme: 'bg-red-500/20 text-red-500'
};

const typeIcons = {
  speed: <Zap className="h-4 w-4" />,
  memory: <Users className="h-4 w-4" />,
  reflex: <Clock className="h-4 w-4" />,
  strategy: <Users className="h-4 w-4" />
};

const ChallengeCard = ({
  id,
  title,
  description,
  difficulty,
  type,
  players,
  duration,
  image,
  popular,
  compact = false
}: ChallengeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/challenges/${id}`);
  };

  if (compact) {
    return (
      <div 
        className="challenge-card cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex gap-4">
          <div 
            className="h-16 w-16 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold">{title}</h3>
              <Badge className={cn('text-xs', difficultyColors[difficulty])}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
            </div>
            
            <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                {typeIcons[type]}
                <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{players} Player{players > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="cyberpunk-card h-full group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-full w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              {popular && (
                <Badge className="bg-accent text-accent-foreground mb-3">
                  Popular Challenge
                </Badge>
              )}
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                {title}
              </h3>
            </div>
            <Badge className={cn('text-sm', difficultyColors[difficulty])}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
          </div>

          <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                {typeIcons[type]}
                <span className="text-sm">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">{players} Player{players > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{duration} min</span>
              </div>
            </div>

            <Button className="gradient-button opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Play Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
