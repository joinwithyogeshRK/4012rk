import { useState } from 'react';
import { Edit, Trophy, Medal, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfileHeaderProps = {
  username: string;
  level: number;
  joinDate: string;
  bio: string;
  avatarUrl: string;
  achievements: {
    total: number;
    common: number;
    rare: number;
    epic: number;
    legendary: number;
  };
};

const ProfileHeader = ({
  username,
  level,
  joinDate,
  bio,
  avatarUrl,
  achievements
}: ProfileHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      // In a real app, you would call an API here
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-primary/30">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback className="text-4xl">{username.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
            {level}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-1">{username}</h1>
              <p className="text-muted-foreground mb-4">Member since {joinDate}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 bg-transparent hover:bg-primary/20"
              onClick={handleEdit}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? 'Save' : 'Edit Profile'}
            </Button>
          </div>

          {isEditing ? (
            <textarea
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
              className="w-full h-24 p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          ) : (
            <p className="text-muted-foreground mb-6">{bio}</p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/5">
              <Trophy className="h-6 w-6 mb-2 text-muted-foreground" />
              <span className="text-lg font-bold">{achievements.total}</span>
              <span className="text-xs text-muted-foreground">Total</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/5">
              <Trophy className="h-6 w-6 mb-2 text-gray-400" />
              <span className="text-lg font-bold">{achievements.common}</span>
              <span className="text-xs text-muted-foreground">Common</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/5">
              <Medal className="h-6 w-6 mb-2 text-blue-400" />
              <span className="text-lg font-bold">{achievements.rare}</span>
              <span className="text-xs text-muted-foreground">Rare</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/5">
              <Award className="h-6 w-6 mb-2 text-purple-400" />
              <span className="text-lg font-bold">{achievements.epic}</span>
              <span className="text-xs text-muted-foreground">Epic</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/5">
              <Crown className="h-6 w-6 mb-2 text-yellow-400" />
              <span className="text-lg font-bold">{achievements.legendary}</span>
              <span className="text-xs text-muted-foreground">Legendary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
