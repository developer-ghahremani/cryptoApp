import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCoins } from "../../../api/coins";
import MainLayout from "../../../layout/main";
import CoinList from "./CoinList";
import { HomeContext } from "./context";
import NavBar from "./NavBar";

const Home = () => {
  const [state, setState] = useState({
    coins: [
      {
        "24hVolume": "41852790081.75633905864162857154",
        btcPrice: "1",
        change: "0.6020529474906908",
        coinrankingUrl:
          "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        listedAt: 1330214400,
        lowVolume: false,
        marketCap: "727897832064.10412294295223001919",
        name: "Bitcoin",
        price: "38883.84662571737534284299",
        rank: 1,
        sparkline: [
          "38682.14220570313512718166",
          "38514.80296931400047186464",
          "38751.73007087195416006628",
          "38354.59760518117356336447",
          "38542.49805015411908706099",
          "38776.89458719986090151792",
          "38987.57478367539799444137",
          "38937.29499686058445087819",
          "39107.66436596143890590201",
          "38514.38988964067838456886",
          "37989.71020547420888217636",
          "37624.55872975863176693334",
          "37577.64662889666136594148",
          "37596.2692012785698617944",
          "37890.99264626864020481034",
          "38159.34611755752203126651",
          "38256.51688746776469303021",
          "38800.35345044953767530009",
          "39151.31253756982061013695",
          "39315.48148645888960860651",
          "39594.6130470199095714206",
          "39605.6804783323838993265",
          "39923.6531353304183562296",
          "40133.01749656728792132644",
          "39784.40612339254972328999",
          "39281.24927028213800590189",
          "38883.84662571737534284299",
        ],
        symbol: "BTC",
        tier: 1,
        uuid: "Qwsogvtv82FCd",
      },
    ],
  });

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    try {
      const { data } = await getCoins();
      setState((s) => ({ ...s, coins: data.data.coins }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContext.Provider value={{ state, setState }}>
      <MainLayout>
        <NavBar />

        <CoinList />
      </MainLayout>
    </HomeContext.Provider>
  );
};

export default Home;

const styles = StyleSheet.create({});
