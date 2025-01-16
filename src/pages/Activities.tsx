import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Helmet } from 'react-helmet-async';
import { Introduction } from '@/components/activities/Introduction';
import { CategoryTabs } from '@/components/activities/CategoryTabs';
import { useTranslation } from 'react-i18next';

interface ActivitiesProps {}

const Activities: React.FC<ActivitiesProps> = () => {
  const [grade, setGrade] = useState("1");
  const { t } = useTranslation();

  const categories = {
    numbersAndOperations: {
      title: t('activities.categories.numbersAndOperations.title'),
      activities: [
        { name: t('activities.categories.numbersAndOperations.activities.counting'), grades: "1-2" },
        { name: t('activities.categories.numbersAndOperations.activities.adding'), grades: "1-2" },
        { name: t('activities.categories.numbersAndOperations.activities.subtraction'), grades: "1-2" },
        { name: t('activities.categories.numbersAndOperations.activities.numberLine'), grades: "1-6" },
        { name: t('activities.categories.numbersAndOperations.activities.fractions'), grades: "3-6" },
        { name: t('activities.categories.numbersAndOperations.activities.coloringFractions'), grades: "3-6" },
      ]
    },
    geometry: {
      title: t('activities.categories.geometry.title'),
      activities: [
        { name: t('activities.categories.geometry.activities.spatialLocalization'), grades: "1-2" },
        { name: t('activities.categories.geometry.activities.spatialConcepts'), grades: "1-6" },
        { name: t('activities.categories.geometry.activities.lineTypes'), grades: "3-6" },
        { name: t('activities.categories.geometry.activities.labelingElements'), grades: "3-6" },
        { name: t('activities.categories.geometry.activities.coordinateAxes'), grades: "3-6" },
        { name: t('activities.categories.geometry.activities.calculations'), grades: "3-6" },
      ]
    },
    magnitudes: {
      title: t('activities.categories.magnitudes.title'),
      activities: [
        { name: t('activities.categories.magnitudes.activities.analogClocks'), grades: "1-6" },
        { name: t('activities.categories.magnitudes.activities.digitalClocks'), grades: "1-6" },
        { name: t('activities.categories.magnitudes.activities.calendar'), grades: "1-3" },
        { name: t('activities.categories.magnitudes.activities.measurement'), grades: "1-6" },
        { name: t('activities.categories.magnitudes.activities.money'), grades: "1-6" },
      ]
    },
    probability: {
      title: t('activities.categories.probability.title'),
      activities: [
        { name: t('activities.categories.probability.activities.dataTables'), grades: "1-6" },
        { name: t('activities.categories.probability.activities.pictograms'), grades: "1-6" },
        { name: t('activities.categories.probability.activities.barcodes'), grades: "1-5" },
        { name: t('activities.categories.probability.activities.frequencyCurves'), grades: "5-6" },
        { name: t('activities.categories.probability.activities.pieCharts'), grades: "4-6" },
        { name: t('activities.categories.probability.activities.createPictograms'), grades: "1-5" },
        { name: t('activities.categories.probability.activities.createBarGraphs'), grades: "1-5" },
        { name: t('activities.categories.probability.activities.drawFrequencyCurves'), grades: "5-6" },
        { name: t('activities.categories.probability.activities.probabilityConcepts'), grades: "1-6" },
      ]
    },
    algebra: {
      title: t('activities.categories.algebra.title'),
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
        <title>{t('activities.pageTitle')} - Blueberry Math</title>
        <meta name="description" content={t('activities.pageDescription')} />
      </Helmet>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 space-y-12">
          <Introduction />
          
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-dark">{t('activities.takeALook')}</h2>
            <p className="text-gray-600">
              {t('activities.categoriesDescription')}
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <label className="font-medium">{t('activities.selectGrade')}:</label>
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="border rounded-md p-2"
                >
                  {[1,2,3,4,5,6].map((g) => (
                    <option key={g} value={g}>{t('activities.grade')} {g}</option>
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