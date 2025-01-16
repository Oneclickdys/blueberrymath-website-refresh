import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IntroCard } from './IntroCard';

export const Introduction: React.FC = () => {
  return (
    <section className="space-y-16 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-primary-dark mb-12">Our Activities</h1>
        
        <IntroCard
          title="Simplifying Complexity"
          description="We've broken down learning objectives into small, well-defined components connected to each other. Our algorithm uses this structure to guide students through personalized learning, ensuring they progress in the correct order with a gradual approach."
          imageSrc="/lovable-uploads/e1213eec-1174-40f6-b626-b040ccb3efdc.png"
          imageAlt="Learning objectives network diagram"
          imagePosition="left"
        />

        <IntroCard
          title="Your Personalized Map"
          description="We structure the knowledge components based on your curriculum so students will find the same unit and lesson names on Blueberry Math as in their school materials."
          imageSrc="/lovable-uploads/13a6557a-3d9c-4b34-816b-70475ff6472a.png"
          imageAlt="Evaluation engine concept"
          imagePosition="right"
        />

        <IntroCard
          title="Infinite Possibilities"
          description="Every learning goal has its own evaluation engine capable of generating a limitless variety of activities. These activities are designed by an interdisciplinary team of educators, pedagogues, mathematicians, grammar experts, and designers. Activity values update automatically, giving each student a personalized experience every time. With a base of 8,000 activities, the possibilities are endless: each student faces different challenges every time they log in."
          imageSrc="/lovable-uploads/4e96004e-f976-47f2-a36a-bf16063bcc18.png"
          imageAlt="Infinite possibilities concept"
          imagePosition="left"
        />

        <IntroCard
          title="Holistic Learning"
          description="Our methodology ensures that each student only progresses after mastering the previous step. We've created activities targeting every phase of the cognitive process: Identify - Helping students recognize and understand key concepts. Recall - Encouraging application of what they've learned in specific contexts. Apply - Guiding students to use their knowledge in practical and effective ways."
          imageSrc="/lovable-uploads/22f9bb3c-4e7d-463e-a152-9b4f84097f5c.png"
          imageAlt="Holistic learning concept"
          imagePosition="right"
        />
      </div>
    </section>
  );
};