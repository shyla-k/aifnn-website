import React from 'react';

const services = [
  {
    title: "AI Automation",
    description: "Streamline your operations with smart task automation.",
    icon: "https://img.icons8.com/ios-filled/50/settings.png",
  },
  {
    title: "Analytics & Insights",
    description: "Unlock valuable insights from your data in real-time.",
    icon: "https://img.icons8.com/ios-filled/50/combo-chart.png",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud tools to support business growth.",
    icon: "https://img.icons8.com/ios-filled/50/cloud.png",
  },
  {
    title: "AI Chatbots",
    description: "24/7 customer support with smart virtual assistants.",
    icon: "https://img.icons8.com/ios-filled/50/artificial-intelligence.png",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, i) => (
          <div className="card" key={i}>
            <div className="icon"><img src={service.icon} alt="" /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
