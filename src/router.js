import { pageName } from "../constant";
import HomeStack from "./pages/Home";
import Splash from "./pages/Splash";

const router = [
  { name: pageName.splash, component: Splash },
  { name: pageName.home.index, component: HomeStack },
];

export default router;
