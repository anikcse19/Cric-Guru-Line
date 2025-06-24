import NewsListView from "@/components/common/NewsListView";
import DownloadApp from "@/components/shared/DownloadApp";
import FollowUs from "@/components/shared/FollowUs";
import React from "react";
const NewsData = [
  {
    title: "“He knows when to counterattack,”: Shastri lauds Pant",
    time: "2 hrs ago",
    category: "News",
    description:
      "India were put into a commanding position on day four of the ongoing first Test against England i...",
    image: "/image-1.jpg",
    link: "/news/shastri-lauds-pant",
  },
  {
    title:
      "SL vs BAN 2nd Test: Bullish Sri Lanka, Bangladesh see each other in final Test",
    time: "3 hrs ago",
    category: "News",
    description:
      "With the first Test ending in a stalemate, all eyes now turn to Colombo, where t...",
    image: "/image-1.jpg",
    link: "/news/sl-vs-ban-2nd-test-preview",
  },
  {
    title: "WI vs AUS 1st Test: All you need to know",
    time: "4 hrs ago",
    category: "News",
    description:
      "West Indies and Australia are set to lock horns in the first Te...",
    image: "/image-1.jpg",
    link: "/news/wi-vs-aus-1st-test",
  },
  {
    title:
      "“I’ve forgotten what my position…”: KL Rahul after classy century against England",
    time: "5 hrs ago",
    category: "News",
    description:
      "A classy century from KL Rahul helped India set England a formi...",
    image: "/image-1.jpg",
    link: "/news/kl-rahul-century-england",
  },
  {
    title:
      "WI-W vs SA-W 3rd T20I: All you need to know, head to head, likely XI",
    time: "1 day ago",
    category: "News",
    description:
      "West Indies Women are gearing up to host South Africa Women in ...",
    image: "/image-1.jpg",
    link: "/news/wiw-vs-saw-3rd-t20i",
  },
  {
    title: "Travis Head calls on Australia to move on from WTC loss",
    time: "23 hrs ago",
    category: "News",
    description:
      "Australian batter Travis Head has urged his teammates to move on from team’s disappointing WTC final loss.",
    image: "/image-1.jpg",
    link: "/news/travis-head-wtc-loss",
  },
  {
    title:
      "Bumrah equals legendary Kapil Dev’s massive record with fifer against England",
    time: "1 day ago",
    category: "News",
    description:
      "India’s tearaway pacer Jasprit Bumrah has equalled legendary Kapil...",
    image: "/image-1.jpg",
    link: "/news/bumrah-equals-kapil-dev-record",
  },
  {
    title: "Litton Das recalled as Bangladesh name squad for Sri Lanka ODIs",
    time: "1 day ago",
    category: "News",
    description:
      "Bangladesh have named their squad for the upcoming three-match ODI",
    image: "/image-1.jpg",
    link: "/news/litton-das-odi-squad",
  },
  {
    title: "Canada qualify for men's T20 World Cup 2026",
    time: "1 day ago",
    category: "News",
    description:
      "Canada beat Bahamas by seven wickets in the Americas regio...",
    image: "/image-1.jpg",
    link: "/news/canada-qualify-t20-world-cup",
  },
  {
    title:
      "“What people write is not in my hands”: Jasprit Bumrah slams his critics",
    time: "1 day ago",
    category: "News",
    description:
      "The great Indian fast bowler Jasprit Bumrah has always managed to silence his cr...",
    image: "/image-1.jpg",
    link: "/news/bumrah-slams-critics",
  },
  {
    title:
      "“India's greatest ever Test batter-keeper”: Ex-Indian cricketer’s massive praise for Pant",
    time: "2 days ago",
    category: "News",
    description:
      "Former Indian cricketer Sanjay Manjrekar has lavished praise on Rishabh",
    image: "/image-1.jpg",
    link: "/news/pant-greatest-test-keeper",
  },
];

const Videos = () => {
  return (
    <div className=" py-12">
      <h2 className=" text-xl uppercase font-semibold">Top Videos</h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-6">
        <div className=" col-span-3">
          <NewsListView data={NewsData}></NewsListView>
          {/* <TeamList></TeamList> */}
        </div>
        <div className="col-span-1 space-y-4">
          <DownloadApp></DownloadApp>
          <FollowUs></FollowUs>
        </div>
      </div>
    </div>
  );
};

export default Videos;
