export interface Exhibition {
  id: number;
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  date: DateClass;
}

interface DateClass {
  started: string;
  ended: string;
}
