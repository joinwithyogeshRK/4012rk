import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Medal, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Player = {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  score: number;
  level: number;
  change?: number;
};

const weeklyPlayers: Player[] = [
  { id: '1', rank: 1, name: 'NeonShadow', avatar: '/avatars/avatar-1.png', score: 12450, level: 42, change: 0 },
  { id: '2', rank: 2, name: 'QuantumGamer', avatar: '/avatars/avatar-2.png', score: 11320, level: 38, change: 1 },
  { id: '3', rank: 3, name: 'CyberPulse', avatar: '/avatars/avatar-3.png', score: 10890, level: 36, change: -1 },
  { id: '4', rank: 4, name: 'VirtualNinja', avatar: '/avatars/avatar-4.png', score: 9750, level: 33, change: 2 },
  { id: '5', rank: 5, name: 'PixelWarrior', avatar: '/avatars/avatar-5.png', score: 9320, level: 31, change: 0 },
];

const allTimePlayers: Player[] = [
  { id: '1', rank: 1, name: 'CyberPulse', avatar: '/avatars/avatar-3.png', score: 156780, level: 85 },
  { id: '2', rank: 2, name: 'NeonShadow', avatar: '/avatars/avatar-1.png', score: 142350, level: 79 },
  { id: '3', rank: 3, name: 'QuantumGamer', avatar: '/avatars/avatar-2.png', score: 138920, level: 76 },
  { id: '4', rank: 4, name: 'TechnoWizard', avatar: '/avatars/avatar-6.png', score: 125640, level: 72 },
  { id: '5', rank: 5, name: 'DigitalPhantom', avatar: '/avatars/avatar-7.png', score: 119870, level: 68 },
];

const LeaderboardPreview = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Leaderboard</span>
          </h2>
          <Button 
            variant="outline" 
            className="border-primary/50 bg-transparent hover:bg-primary/20"
            onClick={() => navigate('/dashboard')}
          >
            Full Rankings
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="glass-card p-6">
          <Tabs defaultValue="weekly" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="alltime">All Time</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="space-y-4">
              <div className="flex items-center justify-between py-3 px-4 text-sm text-muted-foreground">
                <div className="w-16 text-center">Rank</div>
                <div className="flex-1">Player</div>
                <div className="w-24 text-right">Score</div>
                <div className="w-20 text-right">Level</div>
                <div className="w-16 text-right">Change</div>
              </div>
              
              {weeklyPlayers.map((player) => (
                <div 
                  key={player.id} 
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-16 text-center">
                    {player.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />}
                    {player.rank === 2 && <Trophy className="h-5 w-5 text-gray-400 mx-auto" />}
                    {player.rank === 3 && <Trophy className="h-5 w-5 text-amber-700 mx-auto" />}
                    {player.rank > 3 && <span>{player.rank}</span>}
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{player.name}</span>
                  </div>
                  
                  <div className="w-24 text-right font-medium">{player.score.toLocaleString()}</div>
                  
                  <div className="w-20 text-right">
                    <span className="stats-badge">{player.level}</span>
                  </div>
                  
                  <div className="w-16 text-right">
                    {player.change > 0 && (
                      <div className="flex items-center justify-end text-green-500">
                        <ChevronUp className="h-4 w-4" />
                        <span>{player.change}</span>
                      </div>
                    )}
                    {player.change < 0 && (
                      <div className="flex items-center justify-end text-red-500">
                        <ChevronDown className="h-4 w-4" />
                        <span>{Math.abs(player.change)}</span>
                      </div>
                    )}
                    {player.change === 0 && (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="alltime" className="space-y-4">
              <div className="flex items-center justify-between py-3 px-4 text-sm text-muted-foreground">
                <div className="w-16 text-center">Rank</div>
                <div className="flex-1">Player</div>
                <div className="w-24 text-right">Score</div>
                <div className="w-20 text-right">Level</div>
              </div>
              
              {allTimePlayers.map((player) => (
                <div 
                  key={player.id} 
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-16 text-center">
                    {player.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />}
                    {player.rank === 2 && <Trophy className="h-5 w-5 text-gray-400 mx-auto" />}
                    {player.rank === 3 && <Trophy className="h-5 w-5 text-amber-700 mx-auto" />}
                    {player.rank > 3 && <span>{player.rank}</span>}
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{player.name}</span>
                  </div>
                  
                  <div className="w-24 text-right font-medium">{player.score.toLocaleString()}</div>
                  
                  <div className="w-20 text-right">
                    <span className="stats-badge">{player.level}</span>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
