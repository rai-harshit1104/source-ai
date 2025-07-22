import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => (
  <section className="relative pt-20 pb-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-4">
            🚀 AI-Powered Recruitment
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find Perfect
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Talent </span>
            in Seconds
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Our AI agent analyzes thousands of CVs instantly to match you with the exact talent you need. Stop searching, start finding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href='/search'>
                Start Searching <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Instant results</span>
            </div>
          </div>
        </div>
        <div className="animate-slide-up lg:animate-fade-in">
          <Image 
            src="/images/hero-image.png" 
            alt="AI Talent Matching Platform" 
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-large"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 