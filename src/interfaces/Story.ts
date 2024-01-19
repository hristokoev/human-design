import type ImageProps from "./Image";
import type SlideProps from "./Slide";

export default interface StoryProps {
	header: string;
	subheader: string;
	photo: ImageProps;
	slides: SlideProps[];
}