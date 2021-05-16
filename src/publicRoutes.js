import HomePage from "./views/HomePage";
import MealByIdPage from "./views/MealByIdPage";
import MealsByCategoryPage from "./views/MealsByCategoryPage";

export const PUBLIC_ROUTES = {
  homePage: { path: "/", component: HomePage },
  mealsByCategoryPage: {
    path: "/categorie/:category",
    component: MealsByCategoryPage,
    getPath(category) {
      return PUBLIC_ROUTES.mealsByCategoryPage.path.replace(
        ":category",
        category
      );
    },
  },
  mealByIdPage: {
    path: "/meal/:id",
    component: MealByIdPage,
    getPath(id) {
      return PUBLIC_ROUTES.mealByIdPage.path.replace(":id", id);
    },
  },
};
