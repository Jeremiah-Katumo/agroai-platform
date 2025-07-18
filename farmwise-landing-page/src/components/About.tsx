import React from 'react';
import VideoCard from './cards/VideoCard';
import TextContent from './cards/TextContent';

const About: React.FC = () => {
  return (
    <section id="about-3" className="about-3 section p-5 mt-3">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <VideoCard />
          <TextContent />
        </div>
      </div>
    </section>
  );
};

export default About;
