import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Activities = () => {
  const [grade, setGrade] = useState("1");

  const categories = {
    numbersAndOperations: {
      title: "Numbers and Operations",
      activities: [
        { name: "Learning to Count by Selecting Objects", grades: "1-2" },
        { name: "Adding by Summing Quantities", grades: "1-2" },
        { name: "Understanding Subtraction by Crossing Out Elements", grades: "1-2" },
        { name: "Indicating Numbers on the Number Line", grades: "1-6" },
        { name: "Matching Fractions to Their Visual Representations", grades: "3-6" },
        { name: "Coloring Fractions Graphically", grades: "3-6" },
      ]
    },
    geometry: {
      title: "Geometry",
      activities: [
        { name: "Placing Objects to Learn Spatial Localization", grades: "1-2" },
        { name: "Thousands of Combinations to Explore Concepts Like Left, Right, Up, and Down", grades: "1-6" },
        { name: "Identifying Line Types, Angles, and Polygons", grades: "3-6" },
        { name: "Labeling Elements in an Image", grades: "3-6" },
        { name: "Understanding Coordinate Axes", grades: "3-6" },
        { name: "Calculating Perimeters, Areas, and Volumes", grades: "3-6" },
      ]
    },
    magnitudes: {
      title: "Magnitudes and Measurements",
      activities: [
        { name: "Learning Time with Analog Clocks", grades: "1-6" },
        { name: "And with Digital Clocks", grades: "1-6" },
        { name: "Understanding Days of the Week and Months of the Year", grades: "1-3" },
        { name: "Grasping Units of Measurement", grades: "1-6" },
        { name: "Understanding the Value of Coins and Bills", grades: "1-6" },
      ]
    },
    probability: {
      title: "Probability and Statistics",
      activities: [
        { name: "Completing Data Recording Tables", grades: "1-6" },
        { name: "Interpreting Information in Pictograms", grades: "1-6" },
        { name: "Understanding Barcodes", grades: "1-5" },
        { name: "Analyzing Frequency Curves", grades: "5-6" },
        { name: "Interpreting Pie Charts", grades: "4-6" },
        { name: "Creating Pictograms", grades: "1-5" },
        { name: "Creating Bar Graphs", grades: "1-5" },
        { name: "Drawing Frequency Curves", grades: "5-6" },
        { name: "Understanding Probability Concepts", grades: "1-6" },
      ]
    },
    algebra: {
      title: "Algebra and Functions",
      activities: []
    }
  };

  return (
    <>
      <Helmet>
        <title>Activities - Blueberry Math</title>
        <meta name="description" content="Explore our interactive math activities designed for engaging learning." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Introduction Section */}
          <section className="space-y-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-primary-dark mb-6">Our Activities</h1>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Simplifying Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We've broken down learning objectives into small, well-defined components connected to each other. 
                    Our algorithm uses this structure to guide students through personalized learning, ensuring they 
                    progress in the correct order with a gradual approach.
                  </p>
                  <div className="my-4 bg-neutral p-4 rounded-lg text-center text-gray-500">
                    [Graph representation placeholder]
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Your Personalized Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We structure the knowledge components based on your curriculum so students will find the same 
                    unit and lesson names on Blueberry Math as in their school materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Infinite Possibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every learning goal has its own evaluation engine capable of generating a limitless variety of activities. 
                    These activities are designed by an interdisciplinary team of educators, pedagogues, mathematicians, 
                    grammar experts, and designers.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Activity values update automatically, giving each student a personalized experience every time. 
                    With a base of 8,000 activities, the possibilities are endless: each student faces different 
                    challenges every time they log in.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Holistic Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our methodology ensures that each student only progresses after mastering the previous step. 
                    We've created activities targeting every phase of the cognitive process:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Identify:</strong> Helping students recognize and understand key concepts.</li>
                    <li><strong>Recall:</strong> Encouraging application of what they've learned in specific contexts.</li>
                    <li><strong>Apply:</strong> Guiding students to use their knowledge in practical and effective ways.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Activities Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-dark">Take a look!</h2>
            <p className="text-gray-600">
              We explore mathematical concepts through various activities organized into the following categories:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <label className="font-medium">Select Grade:</label>
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="border rounded-md p-2"
                >
                  {[1,2,3,4,5,6].map((g) => (
                    <option key={g} value={g}>Grade {g}</option>
                  ))}
                </select>
              </div>

              <Tabs defaultValue="numbersAndOperations" className="w-full">
                <TabsList className="w-full flex flex-wrap gap-2">
                  {Object.keys(categories).map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="flex-grow"
                    >
                      {categories[category as keyof typeof categories].title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(categories).map(([key, category]) => (
                  <TabsContent key={key} value={key} className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>
                          Select an activity to see it in action
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {category.activities.map((activity, index) => (
                            <li key={index} className="border-b pb-2">
                              <Collapsible>
                                <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                                  <span>{activity.name}</span>
                                  <span className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">
                                      Grades {activity.grades}
                                    </span>
                                    <ChevronDown className="h-4 w-4" />
                                  </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pt-2">
                                  <div className="bg-neutral p-4 rounded-lg text-center text-gray-500">
                                    [Activity preview placeholder]
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Activities;