import React from 'react';

const VideoCard: React.FC = () => {
  return (
    <div className="col-lg-6 order-lg-2 position-relative" data-aos="zoom-out">
      <img
        src="assets/img/img_sq_1.jpg"
        alt="Image"
        className="img-fluid"
      />
      <a
        href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
        className="glightbox pulsating-play-btn"
      >
        <span className="play">
          <i className="bi bi-play-fill"></i>
        </span>
      </a>
    </div>
  );
};

export default VideoCard;
