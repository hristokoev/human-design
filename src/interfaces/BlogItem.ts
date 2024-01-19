import type ImageProps from "./Image";

interface CategoryProps {
	_model: string;
	_id: string;
}

interface PersonProps {
	name: string;
	title: string;
	photo: ImageProps;
}

export default interface BlogItemProps {
	_id: string;
	_created: number;
	title: string;
	perex: string;
	text: string;
	category: CategoryProps;
	tags?: string[];
	image: ImageProps;
	author: PersonProps;
	contributors?: PersonProps[];
}