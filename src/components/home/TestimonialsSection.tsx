"use client"
import { Card, CardContent } from "@/components/ui/Card";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Head of Talent at TechCorp",
    content: "Source AI reduced our hiring time by 60%. The quality of matches is incredible.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Recruitment Manager",
    content: "Finally, a tool that understands what we really need. Game-changing for our team.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Lead Recruiter, FinEdge",
    content: "The AI search is so accurate, and the interface is beautiful. We hired 3 top engineers in a week!",
    rating: 5,
  },
  {
    name: "Alex Müller",
    role: "CTO, InnovateX",
    content: "I was skeptical, but SourceAI delivered. The candidate quality is top-notch.",
    rating: 4,
  },
  {
    name: "Linda Gomez",
    role: "HR Director, HealthPlus",
    content: "The best recruitment tool I've used in years. The pipeline tracking is a lifesaver.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false, direction: 'rtl' })]
  );

  // Remove manual useEffect for animation

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Loved by Recruiters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what industry professionals are saying about SourceAI
          </p>
        </div>
        <div className="relative">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-8 select-none">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[320px] max-w-xs flex-shrink-0"
                  style={{ flex: "0 0 80%", maxWidth: 400 }}
                >
                  <Card className="border-0 shadow-soft h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic flex-1">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 