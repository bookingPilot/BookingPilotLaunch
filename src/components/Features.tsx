import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Clock, 
  MessageCircle, 
  Zap, 
  Users, 
  Shield,
  Phone,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate with customers in their preferred language. Our AI supports 50+ languages for global reach.",
    color: "text-cyber-blue"
  },
  {
    icon: Clock,
    title: "24/7 Availability", 
    description: "Never miss a booking opportunity. Your AI assistant works round the clock, even when you sleep.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Integration",
    description: "Seamlessly handle bookings across Voice, SMS, WhatsApp, and Website Chat from one unified platform.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Get up and running in minutes. Our streamlined onboarding process gets your business live fast.",
    color: "text-cyber-cyan"
  },
  {
    icon: Users,
    title: "Smart Conversation Flow",
    description: "AI understands context and intent, providing natural conversations that feel human-like.",
    color: "text-cyber-purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Encryption and compliance standards protect your customer data and business information.",
    color: "text-primary-glow"
  }
];

const channels = [
  {
    icon: Phone,
    title: "Voice Calls",
    description: "Natural voice conversations with advanced speech recognition"
  },
  {
    icon: MessageCircle,
    title: "SMS Messages", 
    description: "Text-based booking flow that works on any mobile device"
  },
  {
    icon: Smartphone,
    title: "WhatsApp",
    description: "Leverage the world's most popular messaging platform"
  },
  {
    icon: MessageCircle,
    title: "Website Chat",
    description: "Embedded chat widget that integrates with your existing site"
  }
];

export const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered booking system adapts to your business needs with intelligent 
            automation and seamless integrations.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-background/50 ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Channels */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              One Platform, <span className="text-accent">Multiple Channels</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Reach your customers wherever they are with unified booking experiences
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div 
                key={channel.title}
                className="text-center space-y-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-accent animate-fade-in-up"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-primary rounded-full">
                  <channel.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg">{channel.title}</h4>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};