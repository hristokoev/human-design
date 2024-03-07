import type ImageProps from "@/interfaces/Image";
import type SlideProps from "@/interfaces/Slide";

export default interface StoryProps {
  header: string;
  subheader: string;
  photo: ImageProps;
  slides: SlideProps[];
}
