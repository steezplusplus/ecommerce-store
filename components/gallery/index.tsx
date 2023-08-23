import { Image } from "@/types";

type GalleryProps = {
  images: Image[];
};

// TODO show images
export function Gallery(props: GalleryProps) {
  const { images } = props;
  return (
    <div>
      Gallery
    </div>
  );
}