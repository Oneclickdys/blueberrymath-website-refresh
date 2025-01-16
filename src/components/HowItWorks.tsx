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
  Users,
  ChevronRight
} from "lucide-react";

const scientificEvidenceData = {
  "Adaptive Progression": [
    "A Trainable Spaced Repetition Model for Language Learning",
    "Deep Knowledge Tracing (DKT)",
    "How Duolingo's AI Learns What You Need to Learn",
    "Using a Glicko-based Algorithm to Measure In-Course Learning",
    "Sistema ELO"
  ],
  "Forgetting Curve": [
    "The practice of recall and Bloom's taxonomy",
    "The spacing effect",
    "Active Recall / Evocar / Practica Evocada"
  ],
  "Real-life Contexts": [
    "8 strategies that work in mathematics",
    "Cognitive Architecture and Instructional Design",
    "Implications of cognitive load theory for instructional design"
  ],
  "Spaced Practice": [
    "The spacing effect",
    "Interleaved Practice",
    "A Trainable Spaced Repetition Model for Language Learning"
  ],
  "Gamification": [
    "Octalysis Framework",
    "Gamify Online Courses With Tools Built Into Your Learning Management System",
    "From game design elements to gamefulness: defining 'gamification'",
    "Reinforcement, Reward, and Intrinsic Motivation: A Meta-Analysis"
  ]
};

export const HowItWorks = () => {
  const { t } = useTranslation();

  const methodSteps = [
    {
      title: t('howItWorks.method.steps.dailyRoutine.title'),
      description: t('howItWorks.method.steps.dailyRoutine.description'),
      icon: Calendar,
    },
    {
      title: t('howItWorks.method.steps.consistency.title'),
      description: t('howItWorks.method.steps.consistency.description'),
      icon: Clock,
    },
    {
      title: t('howItWorks.method.steps.motivation.title'),
      description: t('howItWorks.method.steps.motivation.description'),
      icon: Gamepad,
    },
    {
      title: t('howItWorks.method.steps.dashboard.title'),
      description: t('howItWorks.method.steps.dashboard.description'),
      icon: ChartLine,
    },
    {
      title: t('howItWorks.method.steps.families.title'),
      description: t('howItWorks.method.steps.families.description'),
      icon: Users,
    },
    {
      title: t('howItWorks.method.steps.evaluation.title'),
      description: t('howItWorks.method.steps.evaluation.description'),
      icon: GraduationCap,
    },
  ];

  const sciencePoints = [
    {
      title: t('howItWorks.science.points.adaptive.title'),
      description: t('howItWorks.science.points.adaptive.description'),
      icon: LineChart,
    },
    {
      title: t('howItWorks.science.points.forgetting.title'),
      description: t('howItWorks.science.points.forgetting.description'),
      icon: Brain,
    },
    {
      title: t('howItWorks.science.points.contexts.title'),
      description: t('howItWorks.science.points.contexts.description'),
      icon: Heart,
    },
    {
      title: t('howItWorks.science.points.practice.title'),
      description: t('howItWorks.science.points.practice.description'),
      icon: Calendar,
    },
    {
      title: t('howItWorks.science.points.gamification.title'),
      description: t('howItWorks.science.points.gamification.description'),
      icon: Gamepad,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary-light/20 to-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="method" className="w-full">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="method" className="text-lg px-6">{t('howItWorks.title')}</TabsTrigger>
            <TabsTrigger value="science" className="text-lg px-6">{t('howItWorks.scienceTitle')}</TabsTrigger>
            <TabsTrigger value="evidence" className="text-lg px-6">{t('howItWorks.evidenceTitle')}</TabsTrigger>
          </TabsList>

          <TabsContent value="method">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">{t('howItWorks.method.title')}</h2>
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">{t('howItWorks.method.subtitle')}</p>
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
          </TabsContent>

          <TabsContent value="science">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">{t('howItWorks.scienceTitle')}</h2>
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">{t('howItWorks.scienceSubtitle')}</p>
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
              <p className="text-xl text-gray-05 max-w-2xl mx-auto">Research that supports our methodology</p>
            </div>

            <div className="flex gap-8">
              <Tabs orientation="vertical" defaultValue="Adaptive Progression" className="w-full">
                <div className="flex gap-8">
                  <TabsList className="flex flex-col h-auto w-80 bg-white rounded-lg p-2">
                    {Object.keys(scientificEvidenceData).map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="justify-start gap-2 p-4 text-left data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        {category}
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <div className="flex-1">
                    {Object.entries(scientificEvidenceData).map(([category, links]) => (
                      <TabsContent key={category} value={category} className="mt-0">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                          <h3 className="text-2xl font-bold mb-6 text-primary-dark">{category}</h3>
                          <ul className="space-y-4">
                            {links.map((link, index) => (
                              <li key={index} className="group">
                                <a
                                  href="#"
                                  className="flex items-center text-neutral-dark hover:text-primary transition-colors"
                                >
                                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};