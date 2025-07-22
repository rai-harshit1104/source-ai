
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Brain, Target, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms analyze CVs and match the perfect candidates to your requirements."
  },
  {
    icon: Target,
    title: "Precise Results",
    description: "Get exactly what you're looking for with intelligent filtering and ranking."
  },
  {
    icon: Clock,
    title: "Instant Search",
    description: "Find top talent in seconds, not weeks. Save time and hire faster."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data and candidate information is protected with enterprise-grade security."
  }
];

const steps = [
  {
    number: "01",
    title: "Describe Your Needs",
    description: "Simply describe the role, skills, and requirements you're looking for in natural language."
  },
  {
    number: "02", 
    title: "AI Searches & Analyzes",
    description: "Our AI reviews thousands of candidate profiles and CVs to find the perfect matches."
  },
  {
    number: "03",
    title: "Get Ranked Results",
    description: "Receive a curated list of top candidates ranked by relevance and fit."
  },
  {
    number: "04",
    title: "Connect & Hire",
    description: "Reach out to candidates directly and track your hiring progress."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Talent at TechCorp",
    content: "Source AI reduced our hiring time by 60%. The quality of matches is incredible.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Recruitment Manager",
    content: "Finally, a tool that understands what we really need. Game-changing for our team.",
    rating: 5
  }
];

const Home = () => (
  <div className="min-h-screen bg-gradient-subtle">
    <HeroSection />
    <FeaturesSection features={features} />
    <HowItWorksSection steps={steps} />
    <TestimonialsSection testimonials={testimonials} />
    <CTASection />
  </div>
);

export default Home;