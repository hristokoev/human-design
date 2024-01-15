import type BlogItem from "./BlogItem";

interface Url {
	current: string;
	next: string;
	prev: string;
}

export default interface BlogPage {
	data: BlogItem[];
	start: number;
	end: number;
	size: number;
	total: number;
	currentPage: number;
	lastPage: number;
	url: Url;
}