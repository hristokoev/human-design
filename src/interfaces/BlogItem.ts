import type Image from "./Image";

interface Category {
	_model: string;
	_id: string;
}

interface Person {
	name: string;
	title: string;
	photo: Image;
}

export default interface BlogItem {
	_id: string;
	_created: number;
	title: string;
	perex: string;
	text: string;
	category: Category;
	tags?: string[];
	image: Image;
	author: Person;
	contributors?: Person[];
}