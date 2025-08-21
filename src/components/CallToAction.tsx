import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 animated-gradient opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="glass-card p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Challenge</span> Yourself?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of players pushing their limits with PulsePlay's immersive gaming challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="gradient-button text-lg px-8 py-6"
              onClick={() => navigate('/challenges')}
            >
              Start Playing Now
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
    </section>
  );
};

export default CallToAction;
