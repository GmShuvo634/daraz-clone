import { ProductReviews } from '../types/review';

export const sampleReviews: ProductReviews = {
  averageRating: 4.4,
  totalReviews: 156,
  ratingDistribution: {
    5: 89,
    4: 45,
    3: 15,
    2: 5,
    1: 2
  },
  reviews: [
    {
      id: 1,
      userId: 'user1',
      userName: 'Ahmed Hassan',
      userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      rating: 5,
      title: 'Excellent quality and fast delivery',
      comment: 'Received in good condition. Very fast delivery. The bag quality is nice except for minor scratches but considering the price it is ok. The build quality is nice except for minor scratches but considering the price it is ok. The build quality is nice except for minor scratches but considering the price it is ok.',
      date: '2024-01-15',
      verified: true,
      helpful: 12,
      images: [
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      ]
    },
    {
      id: 2,
      userId: 'user2',
      userName: 'Fatima Khan',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      rating: 4,
      title: 'Good value for money',
      comment: 'ভালো পণ্য। দাম অনুযায়ী ভালো কোয়ালিটি। প্যাকেজিং ভালো ছিল। ডেলিভারি সময়মতো হয়েছে।',
      date: '2024-01-10',
      verified: true,
      helpful: 8,
      images: [
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      ]
    },
    {
      id: 3,
      userId: 'user3',
      userName: 'Mohammad Ali',
      userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      rating: 5,
      title: 'Highly recommended',
      comment: 'খুবই ভালো মানের ব্যাগ। দাম অনুযায়ী অসাধারণ। সবার কিনতে পারেন।',
      date: '2024-01-08',
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      userId: 'user4',
      userName: 'Sarah Ahmed',
      userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      rating: 4,
      title: 'Good quality, fast delivery',
      comment: 'Excellent quality. Very little functional as order for the bag. As it is quite spacious and trendy.',
      date: '2024-01-05',
      verified: true,
      helpful: 6
    },
    {
      id: 5,
      userId: 'user5',
      userName: 'Rahul Das',
      userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      rating: 5,
      title: 'Outstanding product & Mega Deals really deserve this lowest price!!!',
      comment: 'OUTSTANDING product & Mega Deals really deserve this lowest price!!!',
      date: '2024-01-03',
      verified: true,
      helpful: 9
    }
  ]
};