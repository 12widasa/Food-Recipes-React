// export digunakan jika data tersebut dipakai disetiap komponenlainnya
// tapi karena contoh : tutorial sudah masuk ke recipe maka tutorial tidak perlu memakai export
// tanpa export hanya digunakan ketika jika ingin menampilkan data di halaman lain
export interface Recipe {
  id: number;
  name: string;
  slug: string;
  url_file: string;
  url_video: string;
  author: Author;
  category: Category;
  tumbnail: string;
  photos: Photo[];
  tutorials: Tutorial[];
  recipe_ingredients: RecipeIngredient[];
  about: string;
}

interface Photo {
  id: number;
  photo: string;
}

interface Tutorial {
  id: number;
  name: string;
}

interface Author {
  id: number;
  name: string;
  photo: string;
}

interface RecipeIngredient {
  id: number;
  ingredient: Ingredient;
}

interface Ingredient {
  id: number;
  name: string;
  photo: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  recipes_count: number;
  recipes: Recipe[];
}
