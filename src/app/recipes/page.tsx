import { fetchRecipes } from "@/lib/api/recipes/recipes.api";
import RecipesList from "../../components/recipes/recipes-list";

const RecipesPage = () => {
  const recipesPromise = fetchRecipes()
  return (
    <div>
      <h1>Recipes page</h1>
      <RecipesList recipesPromise={recipesPromise}/>
    </div>
  );
};

export default RecipesPage;
