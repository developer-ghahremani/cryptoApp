import Home from "./Home";
import { pageName } from "../../../constant";
import Favorite from "./Favorite";
import Cart from "./Cart";

const homeRoutes = [
  {
    name: pageName.home.home,
    component: Home,
    options: { drawerLabel: "Home" },
  },
  {
    name: pageName.home.favorite,
    component: Favorite,
    options: { drawerLabel: "Favorites" },
  },
  {
    name: pageName.home.cart,
    component: Cart,
    options: { drawerLabel: "Cart" },
  },
];

export default homeRoutes;
