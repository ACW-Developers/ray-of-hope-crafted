import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Programs } from "@/components/home/Programs";
import { Impact } from "@/components/home/Impact";
import { CallToAction } from "@/components/home/CallToAction";
import { WaveDivider } from "@/components/ui/WaveDivider";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <WaveDivider color="hsl(var(--primary))" />
      <Programs />
      <WaveDivider color="hsl(var(--primary))" />
      <Impact />
      <WaveDivider color="hsl(var(--background))" />
      <CallToAction />
    </main>
  );
};

export default Index;
