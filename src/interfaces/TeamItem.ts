import type ImageProps from "./Image";
import type LinksProps from "./Links";
import type StoryProps from "./Story";

interface CountersProps {
	number: number;
	text: string;
}

interface CertificatesProps {
	title: string;
	text: string;
	image: ImageProps;
}

export default interface TeamItemProps {
	name: string;
	title: string;
	photo: ImageProps;
	avatar: ImageProps;
	email?: string;
	phone?: string;
	links?: LinksProps[];
	quote: string;
	story?: StoryProps[];
	award?: ImageProps;
	counters?: CountersProps[];
	certificates: CertificatesProps[];
}