import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AIAssistant from "@/components/home/ai-assistant/AIAssistant";
import ChatMessage from "@/components/home/ai-assistant/ChatMessage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AIAssistant />
    
    </main>
  );
}