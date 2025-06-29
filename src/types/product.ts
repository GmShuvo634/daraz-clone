export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  company?: string;
  companyLogo?: string;
}
