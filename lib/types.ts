export interface Technology {
  name: string;
  logo: string;
}

export interface Category {
  title: string;
  items: Technology[];
}

export interface TechnologySectionProps {
  title: string;
  categories?: Category[];
  items?: Technology[];
}