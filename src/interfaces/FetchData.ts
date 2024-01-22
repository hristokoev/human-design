

import type BlogItemProps from "./BlogItem";
import type FaqItemProps from "./FaqItem";
import type TeamItemProps from "./TeamItem";

export default interface FetchDataProps {
	blogModel?: BlogItemProps[];
	faqModel?: FaqItemProps[];
	teamModel?: TeamItemProps[];
}