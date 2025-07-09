import App from "@/App";
import Scorecard from "@/components/matchDetails/match-scorecard/Scorecard";
import Home from "@/pages/Home";
import Commentary from "@/pages/matchDetails/Commentary";
import MatchDetails from "@/pages/matchDetails/MatchDetails";
import News from "@/pages/News";
import Players from "@/pages/players/Players";
import Polls from "@/pages/Polls";
import MensRanking from "@/pages/Rankings/Men";
import WomensRankingPage from "@/pages/Rankings/Womens";
import Recent from "@/pages/schedule/recent/Recent";
import RecentAll from "@/pages/schedule/recent/RecentAll";
import RecentODI from "@/pages/schedule/recent/RecentODI";
import RecentT10 from "@/pages/schedule/recent/RecentT10";
import RecentT20 from "@/pages/schedule/recent/RecentT20";
import RecentTEST from "@/pages/schedule/recent/RecentTEST";
import Schedule from "@/pages/schedule/Schedule";
import Upcoming from "@/pages/schedule/upcoming/Upcoming";
import UpcomingAll from "@/pages/schedule/upcoming/UpcomingAll";
import UpcomingODI from "@/pages/schedule/upcoming/UpcomingODI";
import UpcomingT10 from "@/pages/schedule/upcoming/UpcomingT10";
import UpcomingT20 from "@/pages/schedule/upcoming/UpcomingT20";
import UpcomingTest from "@/pages/schedule/upcoming/UpcomingTest";
import Series from "@/pages/series/Series";
import Teams from "@/pages/teams/Teams";
import Videos from "@/pages/Videos";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/cricket-schedule",
        element: <Schedule></Schedule>,
        children: [
          {
            path: "recent",
            element: <Recent></Recent>,
            children: [
              { path: "all", element: <RecentAll></RecentAll> },
              { path: "t20", element: <RecentT20></RecentT20> },
              { path: "odi", element: <RecentODI></RecentODI> },
              { path: "test", element: <RecentTEST></RecentTEST> },
              { path: "t10", element: <RecentT10></RecentT10> },
            ],
          },
          {
            path: "upcoming",
            element: <Upcoming></Upcoming>,
            children: [
              { path: "all", element: <UpcomingAll></UpcomingAll> },
              { path: "t20", element: <UpcomingT20></UpcomingT20> },
              { path: "odi", element: <UpcomingODI></UpcomingODI> },
              { path: "test", element: <UpcomingTest></UpcomingTest> },
              { path: "t10", element: <UpcomingT10></UpcomingT10> },
            ],
          },
        ],
      },
      {
        path: "/match-details/:tab/:id",
        element: <MatchDetails />,
      },
      
      // {
      //   path: "/match-details",
      //   element: <MatchDetails></MatchDetails>,
      //   children: [
      //     {
      //       path: "/commentary/:id",
      //       element: <Commentary></Commentary>,
      //     },
      //     {
      //       path: "/scorecard/:id",
      //       element: <Scorecard></Scorecard>,
      //     },
      //     {
      //       path: "/info/:id",
      //       element: <Info></Info>,
      //     },
      //   ],
      // },
      { path: "/cricket-series", element: <Series></Series> },
      { path: "/cricket-teams", element: <Teams></Teams> },
      { path: "/cricket-players", element: <Players></Players> },
      { path: "/cricket-news", element: <News></News> },
      { path: "/cricket-videos", element: <Videos></Videos> },
      { path: "/rankings/mens", element: <MensRanking /> },
      { path: "/rankings/womens", element: <WomensRankingPage /> },
      { path: "/polls", element: <Polls></Polls> },
    ],
  },
]);

export default router;
