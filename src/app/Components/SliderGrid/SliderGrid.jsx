import { SingleSlider } from "../SingleSlider/SingleSlider";

export default function SliderGrid() {
const sliders = [
    [
      "https://i.ibb.co/chhryq3B/0101-ch.jpg",
      "https://i.ibb.co/j93wktbQ/0102-ca.jpg",
    ],
    [
      "https://i.ibb.co/gbV2nBHN/0103-cl.jpg",
      "https://i.ibb.co/XfByj2jY/0202-ct.jpg",
    ],
    [
      "https://i.ibb.co/hxgZ0rS5/0301-cr.jpg",
      "https://i.ibb.co/kgcgJDF3/0302-mt.jpg",
    ],
    [
      "https://i.ibb.co/xShmvRPR/0401-fy.jpg",
      "https://i.ibb.co/rRGrk4r2/0402-ob.jpg",
    ],
    [
      "https://i.ibb.co/PsFKvvLD/0501-rm.jpg",
      "https://i.ibb.co/3m3SMxvm/0502-sk.jpg",
    ],
    [
      "https://i.ibb.co/wFc8PwXF/0503-rs.jpg",
      "https://i.ibb.co/GvLVdJng/0601-ti.jpg",
    ],
  ];
  return (
    <section className="mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sliders.map((imgSet, i) => (
        <SingleSlider key={i} images={imgSet} />
      ))}
    </section>
  );
}
