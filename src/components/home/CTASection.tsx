import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Search, Users } from "lucide-react";

const CTASection = () => (
  <section className="py-20 bg-gradient-hero">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
        Ready to Transform Your Hiring?
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Join thousands of companies already using SourceAI to find exceptional talent faster than ever.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline-white" size="xl" asChild>
          <Link href="/search">
            <Search className="w-5 h-5" />
            Try Search Now
          </Link>
        </Button>
        <Button variant="secondary" size="xl" asChild>
          <Link href="/signup">
            <Users className="w-5 h-5" />
            Start Free Trial
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection; 