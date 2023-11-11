export interface Welcome {
  homepage: Homepage;
  stories: Stories;
  features: Features;
  pricing: Pricing;
  shared: Shared;
}

export interface Features {
  seo: SEO;
  sections: FeaturesSections;
}

export interface FeaturesSections {
  image_with_text: ImageWithText;
  features_panel: FeaturesPanel[];
}

export interface FeaturesPanel {
  icon: string;
  title: string;
  body: string;
}

export interface ImageWithText {
  heading: string;
  sub_text_: string;
  button: Button;
}

export interface Button {
  label: string;
  link: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Homepage {
  seo: SEO;
  sections: HomepageSections;
}

export interface HomepageSections {
  image_with_text: ImageWithText[];
  image_panel: Image[];
  features_panel: FeaturesPanel[];
}

export interface Image {
  image: ImageClass;
  title: string;
  author: string;
  date?: string;
}

export interface ImageClass {
  url: string;
  alt: string;
}

export interface Pricing {
  seo: SEO;
  sections: PricingSections;
}

export interface PricingSections {
  image_with_text: ImageWithText;
  pricing_plan: PricingPlan[];
  comparison_table: ComparisonTable[];
}

export interface ComparisonTable {
  plan: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
}

export interface Shared {
  promotional_panel: PromotionalPanel;
}

export interface PromotionalPanel {
  title: string;
}

export interface Stories {
  seo: SEO;
  sections: StoriesSections;
}

export interface StoriesSections {
  featured_story: FeaturedStory;
  image_grid: Image[];
}

export interface FeaturedStory {
  overline_heading: string;
  heading: string;
  date: string;
  author: string;
  body: string;
}
