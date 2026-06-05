"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React, { use, useEffect, useState } from "react";

export interface IRecipe {
  id: number;
  name: string;
  description: string;
}

interface IProps {
  recipesPromise: Promise<IRecipe[]>;
}

const RecipesList = ({ recipesPromise }: IProps) => {
  const [enabled, setEnabled] = useState(false);
  const { data: recipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await fetch("/api/recipes");
      const data: { recipes: IRecipe[] } = await res.json();
      return data?.recipes;
    },
    enabled,
  });
  // const recipes = use(recipesPromise);
  return (
    <div>
      <button onClick={() => setEnabled((prev) => !prev)}>enable</button>
      {recipes?.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </div>
  );
};

export default RecipesList;
