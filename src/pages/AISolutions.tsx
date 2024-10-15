import React from 'react';

const AISolutions: React.FC = () => {
  const solutions = [
    { title: 'Machine Learning', description: 'Developing predictive models to enhance decision-making processes.' },
    { title: 'Natural Language Processing', description: 'Implementing NLP for improved customer interactions and data analysis.' },
    { title: 'Computer Vision', description: 'Creating systems that interpret and understand visual data from the world.' },
  ];

  return (
    <section id="ai-solutions" className="ai-solutions-section py-16 bg-grey text-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center text-4xl font-bold mb-12">AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="service-card p-6 bg-card-bg rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{solution.title}</h3>
              <p className="leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutions;