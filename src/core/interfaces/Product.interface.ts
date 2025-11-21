export interface Product {
  code: string;
  title: string;
  shortDescription: string;
  description: string[];
  image: ImageMetadata;
  url: string;
  price: number;
}
