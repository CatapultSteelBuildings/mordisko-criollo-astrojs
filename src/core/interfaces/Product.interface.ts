export interface Product {
  code: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  description: string[];
  image: ImageMetadata;
  url: string;
  price: number;
}
