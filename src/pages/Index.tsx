import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Stats } from "@/components/Stats";

const Index = () => {
  useEffect(() => {
    supabase.from("site_visits").insert({}).then();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
