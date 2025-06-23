import App from "@/App";
import Home from "@/pages/Home";
import Players from "@/pages/Players";
import MensRanking from "@/pages/Rankings/Men";
import WomensRankingPage from "@/pages/Rankings/Womens";
import Teams from "@/pages/Teams";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/teams", element: <Teams></Teams> },
      { path: "/players", element: <Players></Players> },
      { path: "/rankings/mens", element: <MensRanking /> },

      { path: "/rankings/womens", element: <WomensRankingPage /> },
    ],
  },
]);

export default router;
