import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Programs } from "@/components/home/Programs";
import { Impact } from "@/components/home/Impact";
import { Team } from "@/components/home/Team";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <Team />
      <CallToAction />
    </main>
  );
};

export default Index;
