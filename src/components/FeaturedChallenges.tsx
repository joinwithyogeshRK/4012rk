import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Trophy, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Challenge = {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  type: 'speed' | 'memory' | 'reflex' | 'strategy';
  players: number;
  duration: number;
  image: string;
  popular?: boolean;
};

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Speed Run',
    description: 'Complete the course in the shortest time possible. Test your reflexes and precision.',
    difficulty: 'medium',
    type: 'speed',
    players: 1,
    duration: 3,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    popular: true
  },
  {
    id: '2',
    title: 'Memory Matrix',
    description: 'Remember and reproduce complex patterns with increasing difficulty.',
    difficulty: 'hard',
    type: 'memory',
    players: 1,
    duration: 5,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f'
  },
  {
    id: '3',
    title: 'Reflex Arena',
    description: 'React to visual and audio cues as quickly as possible in this reflex challenge.',
    difficulty: 'easy',
    type: 'reflex',
    players: 2,
    duration: 4,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    popular: true
  },
  {
    id: '4',
    title: 'Strategy Showdown',
    description: 'Plan your moves and outsmart opponents in this strategic multiplayer game.',
    difficulty: 'extreme',
    type: 'strategy',
    players: 4,
    duration: 15,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
  },
  {
    id: '5',
    title: 'Neon Racer',
    description: 'Navigate through a futuristic neon city while avoiding obstacles at high speed.',
    difficulty: 'hard',
    type: 'speed',
    players: 2,
    duration: 6,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42',
    popular: true
  },
];

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
  strategy: <Trophy className="h-4 w-4" />
};

const FeaturedChallenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === challenges.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? challenges.length - 1 : prevIndex - 1
    );
  };

  const goToChallenge = (id: string) => {
    navigate(`/challenges/${id}`);
  };

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Featured</span> Challenges
          </h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full border-primary/50 bg-transparent hover:bg-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full border-primary/50 bg-transparent hover:bg-primary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {challenges.map((challenge) => (
              <div 
                key={challenge.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div 
                  className="cyberpunk-card h-[500px] overflow-hidden group cursor-pointer"
                  onClick={() => goToChallenge(challenge.id)}
                >
                  <div className="relative h-full w-full">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${challenge.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          {challenge.popular && (
                            <Badge className="bg-accent text-accent-foreground mb-3">
                              Popular Challenge
                            </Badge>
                          )}
                          <h3 className="text-3xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                            {challenge.title}
                          </h3>
                        </div>
                        <Badge className={cn('text-sm', difficultyColors[challenge.difficulty])}>
                          {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {challenge.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1">
                            {typeIcons[challenge.type]}
                            <span className="text-sm">
                              {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{challenge.players} Player{challenge.players > 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{challenge.duration} min</span>
                          </div>
                        </div>

                        <Button className="gradient-button opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Play Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {challenges.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 mx-1 rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-primary w-6' : 'bg-muted hover:bg-primary/50'
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChallenges;
