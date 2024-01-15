import type Image from "./Image";

interface Links {
	url: string;
	text: string;
	icon: 'Web' | 'Discord' | 'Facebook' | 'Instagram' | 'LinkedIn' | 'Pinterest' | 'Reddit' | 'Skype' | 'Snapchat' | 'Telegram' | 'TikTok' | 'Viber' | 'Vimeo' | 'VK (VKontakte)' | 'WhatsApp' | 'X (Twitter)' | 'YouTube'
}

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
	award?: string;
	counters?: Counters[];
	certificates: Certificates[];
}