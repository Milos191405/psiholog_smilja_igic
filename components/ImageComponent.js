import Image from "next/image";

const ImageComponent = ({ src, alt, className = "", priority = false }) => (
  <div className={`flex justify-center ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={800}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="rounded-4xl shadow-lg object-cover"
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  </div>
);

export default ImageComponent;
