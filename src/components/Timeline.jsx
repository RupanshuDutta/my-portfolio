import React from 'react';

const Timeline = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Institute of Engineering and Management, Kolkata',
      period: '2022 - 2025',
      description: 'Computer Applications'
    },
    {
      degree: 'Higher Secondary',
      institution: 'New Barrackpore Colony Boys High School',
      period: '2020 - 2022',
      description: 'WBCHSE Board'
    },
    {
      degree: 'Secondary Education',
      institution: 'Madhyamgram Acharya Prafulla Chandra Vidyayatan High School',
      period: '2019 - 2020',
      description: 'WBBSE Board'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 pb-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
            <div className="text-indigo-600 font-medium mb-2">{edu.institution}</div>
            <div className="text-gray-500 text-sm mb-4">{edu.period}</div>
            <p className="text-gray-600">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;