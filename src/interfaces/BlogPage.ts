import type BlogItemProps from "./BlogItem";

interface UrlProps {
	current: string;
	next: string;
	prev: string;
}

export default interface BlogPageProps {
	data: BlogItemProps[];
	start: number;
	end: number;
	size: number;
	total: number;
	currentPage: number;
	lastPage: number;
	url: UrlProps;
}