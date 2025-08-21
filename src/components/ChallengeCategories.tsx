import { useNavigate } from 'react-router-dom';
import { Zap, Brain, Clock, Trophy, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type CategoryProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  challenges: number;
};

const categories: CategoryProps[] = [
  {
    title: 'Speed',
    description: 'Test your agility and quick reactions with time-based challenges',
    icon: <Zap className="h-8 w-8" />,
    color: 'from-primary/20 to-primary/5',
    challenges: 12
  },
  {
    title: 'Memory',
    description: 'Challenge your recall abilities with pattern recognition games',
    icon: <Brain className="h-8 w-8" />,
    color: 'from-secondary/20 to-secondary/5',
    challenges: 8
  },
  {
    title: 'Reflex',
    description: 'Put your reaction time to the test with split-second decisions',
    icon: <Clock className="h-8 w-8" />,
    color: 'from-accent/20 to-accent/5',
    challenges: 15
  },
  {
    title: 'Strategy',
    description: 'Outsmart opponents with careful planning and tactical thinking',
    icon: <Trophy className="h-8 w-8" />,
    color: 'from-[#6C63FF]/20 to-[#6C63FF]/5',
    challenges: 10
  }
];

const CategoryCard = ({ title, description, icon, color, challenges }: CategoryProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="cyberpunk-card group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
      onClick={() => navigate('/challenges', { state: { category: title.toLowerCase() } })}
    >
      <CardContent className="p-6">
        <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors duration-300">{title}</h3>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{challenges} Challenges</span>
          
          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mr-1">Explore</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ChallengeCategories = () => {
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Challenge <span className="text-gradient">Categories</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeCategories;
