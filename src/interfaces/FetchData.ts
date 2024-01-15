

import type BlogItem from "./BlogItem";
import type CategoryItem from "./CategoryItem";
import type FaqItem from "./FaqItem";
import type TeamItem from "./TeamItem";

export default interface FetchData {
	blogModel?: BlogItem[];
	catsModel?: CategoryItem[];
	faqModel?: FaqItem[];
	teamModel?: TeamItem[];
}