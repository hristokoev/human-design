

import type BlogItemProps from "@/interfaces/BlogItem";
import type FaqItemProps from "@/interfaces/FaqItem";
import type TeamItemProps from "@/interfaces/TeamItem";
import type ReviewItemProps from "@/interfaces/ReviewItem";

export default interface FetchDataProps {
	blogModel?: BlogItemProps[];
	faqModel?: FaqItemProps[];
	teamModel?: TeamItemProps[];
	reviewsModel?: ReviewItemProps[];
}