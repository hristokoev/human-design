import type BlogItemProps from "@/interfaces/BlogItem";
import type FaqItemProps from "@/interfaces/FaqItem";
import type ReviewItemProps from "@/interfaces/ReviewItem";
import type TeamItemProps from "@/interfaces/TeamItem";

export default interface FetchDataProps {
  blogModel?: BlogItemProps[];
  faqModel?: FaqItemProps[];
  teamModel?: TeamItemProps[];
  reviewsModel?: ReviewItemProps[];
}
