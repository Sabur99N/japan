
export interface Region {
  id: string;
  name: string;
  jpName: string;
  description: string;
  image: string;
}

export interface Tradition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Festival {
  id: string;
  title: string;
  month: string;
  description: string;
  image: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
}
