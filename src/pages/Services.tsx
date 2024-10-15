import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Services</h2>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Web Development', description: 'Custom website design, e-commerce solutions, and responsive web applications tailored to your business needs.' },
            { title: 'UI/UX Design', description: 'User-centered design approach to create intuitive and engaging digital experiences that delight your audience.' },
            { title: 'Digital Strategy', description: 'Comprehensive digital strategies to help your brand stand out and achieve your business objectives.' },
            { title: 'AI Solutions', description: 'Cutting-edge AI integration to optimize processes and enhance user experiences across your digital platforms.' },
            { title: 'Digital Product Development', description: 'Creating innovative digital products that solve real-world problems.' },
            { title: 'Immersive Digital Marketing', description: 'Crafting campaigns that captivate audiences across multiple platforms.' },
          ].map((service, index) => (
            <div key={index} className="service-card p-6 bg-card-bg rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;