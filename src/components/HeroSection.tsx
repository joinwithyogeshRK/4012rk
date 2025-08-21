import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(72,198,239,0.2),transparent_40%)]"></div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-56 w-56 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Challenge</span> Your Limits
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
            Experience the next generation of immersive gaming challenges that push your reflexes, strategy, and creativity to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="gradient-button text-lg px-8 py-6"
              onClick={() => navigate('/challenges')}
            >
              Explore Challenges
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 bg-transparent hover:bg-primary/20"
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
