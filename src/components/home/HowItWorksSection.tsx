"use client"
import React, { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

const HowItWorksSection = ({ steps }: { steps: Step[] }) => (
  <section className="py-20 bg-gradient-subtle">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Four simple steps to find your perfect candidate
        </p>
      </div>
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/20 -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-32 relative z-10">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const [ref, inView] = useInView(0.2);
            return (
              <div
                key={index}
                ref={ref}
                className={`relative flex md:min-h-[160px] fade-slide-in${inView ? ' visible' : ''}`}
              >
                {/* Left side (odd steps) */}
                <div className={`hidden md:flex w-1/2 items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  {isLeft && (
                    <div className="text-right max-w-xs ml-auto space-y-3 p-4">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
                {/* Timeline and step number */}
                <div className="flex flex-col items-center w-full md:w-auto md:px-0 z-10">
                  <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background shadow-lg z-10 mb-4 md:mb-0" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                      {step.number}
                    </div>
                    {/* Vertical line segment below the bubble, except for last step */}
                    {index !== steps.length - 1 && (
                      <div className="hidden md:block w-1 bg-primary/20 flex-1 min-h-[64px]" style={{ height: '64px' }} />
                    )}
                  </div>
                </div>
                {/* Right side (even steps) */}
                <div className={`hidden md:flex w-1/2 items-center ${!isLeft ? 'justify-start' : 'justify-end'}`}>
                  {!isLeft && (
                    <div className="text-left max-w-xs mr-auto space-y-3 p-4">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
                {/* Mobile view: show content below number */}
                <div className="md:hidden flex flex-col items-center w-full mt-6 space-y-2 px-2">
                  <h3 className="text-xl font-semibold text-foreground mb-1 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection; 