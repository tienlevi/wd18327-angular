export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
export interface Product {
  _id?: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  isShow: boolean;
}
