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

export const mallProducts: Product[] = [
  {
    id: 1,
    name: 'Refreshing Set of Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 45,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 2,
    name: 'Premium Coffee Beans',
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 89,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 3,
    name: 'Organic Skincare Set',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 125,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 199,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 5,
    name: 'Smart Home Device',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 299,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 149,
    company: 'Adarsha',
    companyLogo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
  }
];

export const justForYouProducts: Product[] = [
  {
    id: 1,
    name: 'Bluetooth Speaker Portable',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 79,
    originalPrice: 159,
    discount: 50
  },
  {
    id: 2,
    name: 'Gaming Keyboard RGB',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 89,
    originalPrice: 149,
    discount: 40
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 45,
    originalPrice: 75,
    discount: 40
  },
  {
    id: 4,
    name: 'Phone Case Premium',
    image: 'https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 25,
    originalPrice: 50,
    discount: 50
  },
  {
    id: 5,
    name: 'Laptop Stand Adjustable',
    image: 'https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 65,
    originalPrice: 99,
    discount: 34
  },
  {
    id: 6,
    name: 'USB Hub 4-Port',
    image: 'https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 35,
    originalPrice: 60,
    discount: 42
  },
  {
    id: 7,
    name: 'Desk Lamp LED',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 55,
    originalPrice: 89,
    discount: 38
  },
  {
    id: 8,
    name: 'Water Bottle Insulated',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 29,
    originalPrice: 45,
    discount: 36
  },
  {
    id: 9,
    name: 'Notebook Set',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 19,
    originalPrice: 35,
    discount: 46
  },
  {
    id: 10,
    name: 'Pen Set Premium',
    image: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 39,
    originalPrice: 65,
    discount: 40
  },
  {
    id: 11,
    name: 'Backpack Travel',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 89,
    originalPrice: 149,
    discount: 40
  },
  {
    id: 12,
    name: 'Sunglasses UV Protection',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 49,
    originalPrice: 89,
    discount: 45
  }
];