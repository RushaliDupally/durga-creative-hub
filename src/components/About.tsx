import { Award, Users, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from industry professionals with over 20 years of experience",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with limited students per batch",
    },
    {
      icon: BookOpen,
      title: "Practical Training",
      description: "Hands-on learning with real-world projects and applications",
    },
    {
      icon: Star,
      title: "Certification",
      description: "Receive recognized certificates upon course completion",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            At Sri Durgas Vocational Training Institute, we are committed to nurturing creativity
            and building professional skills. Our comprehensive courses are designed to transform
            your passion into a successful career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
