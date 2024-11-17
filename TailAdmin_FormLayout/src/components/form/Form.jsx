import React from 'react';
import ContactForm from './ContactForm';
import SurveyForm from './SurveyForm';

const Form = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        {/* Main Heading in Blue */}
        <h1 className="text-3xl font-bold text-black-600">Pro Form Layout</h1>

        {/* Breadcrumb Text */}
        <p className="text-gray-500">
          <span className="text-gray-500">Dashboard</span> / <span className="text-blue-500">Pro Form Layout</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactForm />
        <SurveyForm />
      </div>
    </>
  );
};

export default Form;
