import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import paintingImage from "@/assets/painting-course.jpg";
import jewelleryImage from "@/assets/jewellery-course.jpg";
import tailoringImage from "@/assets/tailoring-course.jpg";
import fashionImage from "@/assets/fashion-course.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Tailoring",
      description:
        "Develop professional tailoring skills including pattern making, cutting, stitching, and garment construction for various clothing types.",
      image: tailoringImage,
      duration: "6 Months",
      level: "Beginner to Advanced",
    },
    {
      title: "Fashion Designing",
      description:
        "Explore the world of fashion design. Learn sketching, draping, fabric selection, and trend forecasting to create stunning fashion collections.",
      image: fashionImage,
      duration: "8 Months",
      level: "Intermediate to Advanced",
    },
    {
      title: "Painting",
      description:
        "Master various painting techniques including oil, acrylic, and watercolor. Learn color theory, composition, and develop your unique artistic style.",
      image: paintingImage,
      duration: "6 Months",
      level: "Beginner to Advanced",
    },
    {
      title: "Jewellery Making",
      description:
        "Learn the art of creating beautiful jewelry pieces. From design to execution, master techniques in metalwork, stone setting, and finishing.",
      image: jewelleryImage,
      duration: "4 Months",
      level: "All Levels",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our diverse range of professional training programs designed to help you
            excel in your creative career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Duration:</span>
                    <span className="text-sm font-semibold text-primary">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Level:</span>
                    <span className="text-sm font-semibold text-primary">{course.level}</span>
                  </div>
                </div>
                <Button onClick={scrollToContact} className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
