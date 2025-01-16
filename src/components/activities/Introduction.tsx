import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IntroCard } from './IntroCard';

export const Introduction: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-primary-dark mb-6">Our Activities</h1>
        
        <IntroCard
          title="Simplifying Complexity"
          description="We've broken down learning objectives into small, well-defined components connected to each other. Our algorithm uses this structure to guide students through personalized learning, ensuring they progress in the correct order with a gradual approach."
          imageSrc="/lovable-uploads/e1213eec-1174-40f6-b626-b040ccb3efdc.png"
          imageAlt="Learning objectives network diagram"
        />

        <IntroCard
          title="Your Personalized Map"
          description="We structure the knowledge components based on your curriculum so students will find the same unit and lesson names on Blueberry Math as in their school materials."
          imageSrc="/lovable-uploads/13a6557a-3d9c-4b34-816b-70475ff6472a.png"
          imageAlt="Evaluation engine concept"
        />

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
  );
};