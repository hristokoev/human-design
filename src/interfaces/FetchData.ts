

import type BlogItemProps from "./BlogItem";
import type CategoryItemProps from "./CategoryItem";
import type FaqItemProps from "./FaqItem";
import type TeamItemProps from "./TeamItem";

export default interface FetchDataProps {
	blogModel?: BlogItemProps[];
	catsModel?: CategoryItemProps[];
	faqModel?: FaqItemProps[];
	teamModel?: TeamItemProps[];
}