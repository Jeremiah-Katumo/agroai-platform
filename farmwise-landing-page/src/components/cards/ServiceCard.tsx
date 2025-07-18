import React from "react";
import exp from "constants";

interface ServiceCardProps {
  number: string;
  heading: string;
  description: string;
  SvgIcon?: React.ComponentType; // Optional SVG icon component
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, heading, description, SvgIcon }) => (
  <div className="col-lg-3 col-md-6">
    <div className="service-item">
      <span className="number">{number}</span>
      <div className="service-item-icon">
        {SvgIcon ? <SvgIcon /> : <i className="bi bi-gear"></i>}
      </div>
      <div className="service-item-content">
        <h3 className="service-heading">{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ServiceCard;