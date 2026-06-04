"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

interface IRecipe {
  id: number;
  name: string;
  description: string;
}

const RecipesList = () => {
  const { data: recipes } = useSuspenseQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 4000));
      const res = await fetch("https://dummyjson.com/recipes");
      const data: { recipes: IRecipe[] } = await res.json();
      return data?.recipes;
    },
  });
  return (
    <div>
      {recipes?.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </div>
  );
};

export default RecipesList;
