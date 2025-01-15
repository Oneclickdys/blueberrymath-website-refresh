import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Calendar, 
  ChartLine, 
  Clock, 
  Gamepad, 
  GraduationCap, 
  Heart, 
  LineChart, 
  Users 
} from "lucide-react";

export const HowItWorks = () => {
  const { t } = useTranslation();

  const methodSteps = [
    {
      title: "Integrate Blueberry into Daily Routines",
      description: "Blueberry Math is a versatile tool that can be used at home or in school. In the classroom, dedicate a few minutes at the beginning or end of the class to reinforce what you've taught, or use it as a reward activity after completing other tasks.",
      icon: Calendar,
    },
    {
      title: "Consistency is Key",
      description: "Establish a daily routine, whether at home, in the classroom, or both, for students to practice math for 15 minutes a day, consolidating their key skills.",
      icon: Clock,
    },
    {
      title: "Motivate Through Game Narrative",
      description: "Teachers guide students through topics that will be covered in the following week. Encourage them to complete missions as part of their learning and engage with the storyline.",
      icon: Gamepad,
    },
    {
      title: "Use the Teacher Dashboard as Your Ally",
      description: "Review your students' progress at least once a week, identify those needing additional support, and plan personalized interventions based on the platform's data. Use progress and dedication reports to group students for peer-learning opportunities.",
      icon: ChartLine,
    },
    {
      title: "Involve Families in Learning",
      description: "Share progress reports with parents at the end of each term to keep them informed and involved in their child's mathematical development.",
      icon: Users,
    },
    {
      title: "Fun Knowledge Evaluation",
      description: "Use in-class weekly practice sessions to review topics and conduct diagnostic assessments in a dynamic and collaborative way, tailored to your class's levels.",
      icon: GraduationCap,
    },
  ];

  const sciencePoints = [
    {
      title: "Adaptive Progression",
      description: "Activities adjust to the student's level, keeping them challenged but not frustrated, ensuring they work through the curriculum at their own pace.",
      icon: LineChart,
    },
    {
      title: "Forgetting Curve",
      description: "Students review previously learned concepts to avoid forgetting and build strong knowledge.",
      icon: Brain,
    },
    {
      title: "Real-Life Contexts",
      description: "Make learning more enjoyable and applicable by using scenarios students can relate to.",
      icon: Heart,
    },
    {
      title: "Spaced Practice",
      description: "Algorithms ensure students revisit mastered concepts, promoting long-term retention.",
      icon: Calendar,
    },
    {
      title: "Motivating Gamification",
      description: "Game narratives and unlocked achievements stimulate curiosity and consistency in students.",
      icon: Gamepad,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/20 to-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="method" className="w-full">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="method" className="text-lg px-6">How to use Blueberry Math</TabsTrigger>
            <TabsTrigger value="science" className="text-lg px-6">The Science Behind</TabsTrigger>
            <TabsTrigger value="evidence" className="text-lg px-6">Scientific Evidence</TabsTrigger>
          </TabsList>

          <TabsContent value="method">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">How to use Blueberry Math</h2>
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">A simple and effective Method</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-dark">{index + 1}</h3>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">{step.title}</h3>
                  <p className="text-gray-05">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="A Month with Blueberry"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
              />
              <p className="text-center mt-4 text-gray-05 italic">A Month with Blueberry: Visual Guide</p>
            </div>
          </TabsContent>

          <TabsContent value="science">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">The Science Behind</h2>
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">Understanding how Blueberry Math enhances learning</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sciencePoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary-dark">{point.title}</h3>
                  <p className="text-gray-05">{point.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evidence">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">Scientific Evidence</h2>
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">Coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
