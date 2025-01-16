import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Introduction } from '@/components/activities/Introduction';
import { CategoryTabs } from '@/components/activities/CategoryTabs';

interface ActivitiesProps {}

const Activities: React.FC<ActivitiesProps> = () => {
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

  // Filter categories based on selected grade
  const filteredCategories = Object.entries(categories).reduce((acc, [key, category]) => {
    const filteredActivities = category.activities.filter(activity => {
      const [min, max] = activity.grades.split('-').map(Number);
      const selectedGrade = Number(grade);
      return selectedGrade >= min && selectedGrade <= (max || min);
    });

    if (filteredActivities.length > 0) {
      acc[key] = {
        ...category,
        activities: filteredActivities
      };
    }
    return acc;
  }, {} as typeof categories);

  return (
    <>
      <Helmet>
        <title>Activities - Blueberry Math</title>
        <meta name="description" content="Explore our interactive math activities designed for engaging learning." />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 space-y-12">
          <Introduction />
          
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

              <CategoryTabs categories={filteredCategories} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Activities;