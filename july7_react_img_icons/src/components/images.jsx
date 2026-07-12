import "./images.css";

import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";

const images = [i1, i2, i3, i4, i5, i6, i7, i8];

export default function Images() {
  return (
    <>
      <h1>React JS Image Gallery</h1>

      <div className="gallery">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
}