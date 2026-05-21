import { Link } from 'react-router-dom';
import './Gallery.css';

import img1 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.22.59 PM.jpeg';
import img2 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.23.08 PM.jpeg';
import img3 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.23.13 PM.jpeg';
import img4 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.25.07 PM.jpeg';
import img5 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.25.17 PM.jpeg';
import img6 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.26.22 PM.jpeg';
import img7 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.48.27 PM (1).jpeg';
import img8 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.48.28 PM (1).jpeg';
import img9 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.48.29 PM (1).jpeg';
import img10 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.48.29 PM.jpeg';
import img11 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 3.48.30 PM.jpeg';
import img12 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 4.10.07 PM (1).jpeg';
import img13 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 4.10.07 PM.jpeg';
import img14 from '../../assets/gallery/WhatsApp Image 2026-04-28 at 4.10.08 PM.jpeg';

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <div className="gallery-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>Gallery</h2>
          <p>Explore our packaging solutions</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;