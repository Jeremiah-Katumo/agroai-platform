import React from 'react';

const TextContent: React.FC = () => {
  return (
    <div className="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
      <h2 className="content-title mb-4">Plants Make Life Better</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        necessitatibus placeat, atque qui voluptatem velit explicabo vitae
        repellendus architecto provident nisi ullam minus asperiores commodi!
        Tenetur, repellat aliquam nihil illo.
      </p>
      <ul className="list-unstyled list-check">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Velit explicabo vitae repellendu</li>
        <li>Repellat aliquam nihil illo</li>
      </ul>
      <p>
        <a href="#" className="btn-cta">
          Get in touch
        </a>
      </p>
    </div>
  );
};

export default TextContent;
