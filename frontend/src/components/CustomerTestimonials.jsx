import React from "react";
import { useTranslation } from "react-i18next";

const CustomerTestimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: t('testimonials.comment1'),
      role: "CEO of ExampleCorp"
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: t('testimonials.comment2'),
      role: "Founder of InnovateStartup"
    },
    {
      id: 3,
      name: "Steve Brown",
      comment: t('testimonials.comment3'),
      role: "Product Manager at TechSolution"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
