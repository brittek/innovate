import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Brittek Digital</h2>
        <p className="text-lg mb-8">We're a team of curious creatives that love crafting beautiful digital experiences for ambitious brands. With over a decade of experience, we've helped transform digital identities across various sectors, from startups to global icons.</p>
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>To provide forward-thinking brands with a competitive edge through innovative digital solutions.</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To be the leading creative force in digital innovation, setting new standards in web development and design.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About