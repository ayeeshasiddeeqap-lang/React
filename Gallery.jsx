const images = [
  "https://picsum.photos/400?1",
  "https://picsum.photos/400?2",
  "https://picsum.photos/400?3",
  "https://picsum.photos/400?4",
  "https://picsum.photos/400?5",
  "https://picsum.photos/400?6",
];

export default function Gallery() {
  return (
    <div className="container">
      <h1>Gallery</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          {image}
        ))}
      </div>
    </div>
  );
}
