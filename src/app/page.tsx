import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import JourneySection from "@/components/sections/JourneySection";
import VenturesSection from "@/components/sections/VenturesSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import InsightsSection from "@/components/sections/InsightsSection";
import ContactSection from "@/components/sections/ContactSection";
import PodcastSection from "@/components/sections/PodcastSection";
import { NumbersStrip, Marquee, PersonalSection, MediaSection, SpeakingSection, NewsletterSection } from "@/components/sections/ExtrasSections";
export default function Home() {
  return (<><Navbar /><main><HeroSection /><IntroductionSection /><NumbersStrip /><JourneySection /><VenturesSection /><Marquee /><PhilosophySection /><PersonalSection /><PodcastSection /><MediaSection /><InsightsSection /><SpeakingSection /><NewsletterSection /><ContactSection /></main><Footer /></>);
}
