import { IRecipe } from "./../../../components/recipes/recipes-list";

export async function fetchRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data: { recipes: IRecipe[] } = await res.json();
  return data?.recipes || [];
}
