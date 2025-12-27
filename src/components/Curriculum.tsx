import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Gem, Scissors, Sparkles } from "lucide-react";

const Curriculum = () => {
  const courses = [
    {
      id: "tailoring",
      title: "Tailoring",
      icon: Scissors,
      duration: "6 Months",
      modules: [
        {
          title: "Month 1-2: Foundation",
          topics: [
            "Introduction to sewing machines",
            "Understanding fabrics and textiles",
            "Basic stitching techniques",
            "Body measurement and sizing",
            "Pattern reading basics",
            "Seam finishing methods",
          ],
        },
        {
          title: "Month 3-4: Garment Construction",
          topics: [
            "Pattern drafting fundamentals",
            "Cutting techniques",
            "Shirt and blouse construction",
            "Trouser and skirt making",
            "Zipper and button application",
            "Alterations and fitting",
          ],
        },
        {
          title: "Month 5-6: Advanced Tailoring",
          topics: [
            "Traditional Indian wear tailoring",
            "Western formal wear construction",
            "Advanced fitting techniques",
            "Embellishment and decoration",
            "Quality finishing",
            "Portfolio garment creation",
          ],
        },
      ],
    },
    {
      id: "fashion",
      title: "Fashion Designing",
      icon: Sparkles,
      duration: "8 Months",
      modules: [
        {
          title: "Month 1-2: Design Foundation",
          topics: [
            "Fashion illustration and sketching",
            "Understanding fashion trends",
            "Color theory for fashion",
            "Fabric study and selection",
            "Design elements and principles",
          ],
        },
        {
          title: "Month 3-4: Technical Skills",
          topics: [
            "Pattern making and draping",
            "Garment construction basics",
            "Textile science",
            "Fashion history and evolution",
            "Digital design tools introduction",
          ],
        },
        {
          title: "Month 5-6: Specialization",
          topics: [
            "Indian ethnic wear design",
            "Western contemporary fashion",
            "Sustainable fashion practices",
            "Accessory design",
            "Fashion styling fundamentals",
          ],
        },
        {
          title: "Month 7-8: Professional Practice",
          topics: [
            "Collection development",
            "Fashion portfolio creation",
            "Trend forecasting",
            "Fashion marketing basics",
            "Final collection presentation",
            "Industry preparation",
          ],
        },
      ],
    },
    {
      id: "painting",
      title: "Painting",
      icon: Palette,
      duration: "6 Months",
      modules: [
        {
          title: "Month 1-2: Fundamentals",
          topics: [
            "Introduction to art materials and tools",
            "Basic drawing techniques and sketching",
            "Understanding color theory and color wheel",
            "Composition and perspective basics",
            "Still life drawing practice",
          ],
        },
        {
          title: "Month 3-4: Painting Techniques",
          topics: [
            "Watercolor painting techniques",
            "Acrylic painting fundamentals",
            "Oil painting introduction",
            "Brush techniques and strokes",
            "Texture creation and layering",
            "Light and shadow application",
          ],
        },
        {
          title: "Month 5-6: Advanced & Specialization",
          topics: [
            "Portrait painting",
            "Landscape and nature painting",
            "Abstract art techniques",
            "Mixed media exploration",
            "Personal style development",
            "Final project and portfolio creation",
          ],
        },
      ],
    },
    {
      id: "jewellery",
      title: "Jewellery Making",
      icon: Gem,
      duration: "4 Months",
      modules: [
        {
          title: "Month 1: Basics & Design",
          topics: [
            "Introduction to jewelry making tools",
            "Understanding metals and materials",
            "Gemstone identification",
            "Basic design principles",
            "Sketching jewelry designs",
          ],
        },
        {
          title: "Month 2: Techniques",
          topics: [
            "Wire wrapping techniques",
            "Basic soldering skills",
            "Beading and stringing",
            "Chain making fundamentals",
            "Stone setting basics",
          ],
        },
        {
          title: "Month 3-4: Advanced & Creation",
          topics: [
            "Ring making and sizing",
            "Pendant and earring creation",
            "Bracelet and necklace assembly",
            "Surface finishing techniques",
            "Quality control and polish",
            "Final collection project",
          ],
        },
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Course Curriculum
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive, structured curriculum designed to take you from beginner to professional
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {module.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 ml-4">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="text-muted-foreground">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
