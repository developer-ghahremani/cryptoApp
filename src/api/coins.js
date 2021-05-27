import api from ".";
import { endPoints } from "../../constant";

export const getCoins = (
  timePeriod = "24h",
  orderBy = "marketCap",
  orderDirection = "desc"
) =>
  api.get(endPoints.coins, { params: { timePeriod, orderBy, orderDirection } });
