import type ImageProps from "@/interfaces/Image";
import type LinksProps from "@/interfaces/Links";
import type StoryProps from "@/interfaces/Story";

interface CountersProps {
  number: number;
  text: string;
}

interface CertificatesProps {
  title: string;
  text: string;
  image: ImageProps;
}

export default interface TeamItemProps {
  name: string;
  title: string;
  photo: ImageProps;
  avatar: ImageProps;
  email?: string;
  phone?: string;
  links?: LinksProps[];
  quote: string;
  story?: StoryProps[];
  award?: ImageProps;
  counters?: CountersProps[];
  certificates: CertificatesProps[];
}
