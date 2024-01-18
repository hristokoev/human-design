import type Image from "./Image";
import type Links from "./Links";

interface StoryProps {
	date: string;
	text: string;
}

interface CountersProps {
	number: number;
	text: string;
}

interface CertificatesProps {
	title: string;
	text: string;
	image: Image;
}

export default interface TeamItemProps {
	name: string;
	title: string;
	photo: Image;
	avatar: Image;
	email?: string;
	phone?: string;
	links?: Links[];
	quote: string;
	story?: StoryProps[];
	award?: Image;
	counters?: CountersProps[];
	certificates: CertificatesProps[];
}