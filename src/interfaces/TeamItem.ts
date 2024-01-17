import type Image from "./Image";
import type Links from "./Links";

interface Story {
	date: string;
	text: string;
}

interface Counters {
	number: number;
	text: string;
}

interface Certificates {
	title: string;
	text: string;
	image: Image;
}

export default interface TeamItem {
	name: string;
	title: string;
	photo: Image;
	email?: string;
	phone?: string;
	links?: Links[];
	quote: string;
	story?: Story[];
	award?: Image;
	counters?: Counters[];
	certificates: Certificates[];
}