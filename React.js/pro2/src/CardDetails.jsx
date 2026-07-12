import Card from "./Card";

import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";

export default function CardDetails() {
  return (
    <div className="container">
      <Card image={s1} title="sports" />
      <Card image={s2} title="dailywear" />
      <Card image={s3} title="tracking" />
    </div>
  );
}