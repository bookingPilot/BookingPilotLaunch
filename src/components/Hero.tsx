import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, Phone, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-ai-booking.jpg";
import { Stats } from "@/components/Stats";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #D2C6F5, #00C2FF)",
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered Booking Revolution</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  BookingPilot
                </span>
              </h1>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Your AI assistant for seamless appointment scheduling.
                Why Join the Waitlist?
                  <br />🚀 Priority Onboarding – Be among the first to explore our platform
                  <br />🎁 Exclusive Early-User Benefits – Special offers, tools & features just for early adopters
                  <br />💼 Built for You – Help shape BookingPilot with your feedback
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group btn-primary"
              >
                ✈️ Be the First to Get Onboard with BookingPilot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

            {/* <Button variant="cyber" size="lg">   
              Watch Demo
              </Button> */}
            </div> 

            {/* Channel icons */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-muted-foreground">Available on:</span>
              <div className="flex space-x-4">
                <div 
                  className="p-2 bg-card/30 rounded-lg border border-border/30"
                  title="Voice Call Integration"
                >
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="p-2 bg-card/30 rounded-lg border border-border/30"
                  title="SMS & WhatsApp Support"
                >
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div className="p-2 bg-card/30 rounded-lg border border-border/30"
                  title="Mobile App"
                >
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="p-2 bg-card/30 rounded-lg border border-border/30"
                  title="Website Chat Widget">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Booking System Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">24/7 Active</span>
                  </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm">
                  <div className="font-semibold text-primary">Your AI Assistant </div>
                  <div className="text-muted-foreground">Get ready for a productive and inspiring month ahead!</div>
                  </div>
              </div>
            </div>
          </div>
        </div><Stats />                
      </div>
    </section>
  );
};