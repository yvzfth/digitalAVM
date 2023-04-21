interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  stock: number;
  categories?: string[];
}
interface ICity {
  city: string;
}
interface IProductDB {
  id: string;
  category_id: string;
  caption: string;
  description: string;
  thumbnail: string;
  descriptionImage: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  rating: number;
  price: number;
  stock: number;
}
