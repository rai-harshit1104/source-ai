import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/Card";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeaturesSection = ({ features }: { features: Feature[] }) => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Why Choose SourceAI?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Revolutionary AI technology meets intuitive design to transform how you find and hire talent.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 