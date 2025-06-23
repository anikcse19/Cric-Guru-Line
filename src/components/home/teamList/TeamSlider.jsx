import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const teams = [
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "England", flag: "https://flagcdn.com/gb-eng.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
  { name: "West Indies", flag: "https://flagcdn.com/jm.svg" },
  { name: "India Women", flag: "https://flagcdn.com/in.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "England", flag: "https://flagcdn.com/gb-eng.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
  { name: "West Indies", flag: "https://flagcdn.com/jm.svg" },
  { name: "India Women", flag: "https://flagcdn.com/in.svg" },
  {
    name: "IPL Archive Stats",
    flag: "https://upload.wikimedia.org/wikipedia/en/2/25/IPL_2022_logo.png",
  },
  {
    name: "IPL",
    flag: "https://upload.wikimedia.org/wikipedia/en/2/25/IPL_2022_logo.png",
  },
];

const TeamSlider = () => {
  const sliderRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6.5,
    slidesToScroll: 2,
    arrows: false,
    swipeToSlide: true,
    afterChange: (index) => {
      const slider = sliderRef.current;
      if (!slider) return;
      const visible = Math.floor(slider.innerSlider.props.slidesToShow);
      const total = teams.length;
      setCanGoPrev(index > 0);
      setCanGoNext(index + visible < total);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
        },
      },
    ],
  };

  useEffect(() => {
    if (teams.length <= settings.slidesToShow) {
      setCanGoNext(false);
    }
  }, []);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  return (
    <div className="relative bg-white py-8 px-4 rounded-2xl">
      {/* Left button */}
      {canGoPrev && (
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {teams.map((team, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-center border w-40 border-[#e0e0e0] rounded-full py-2 bg-white hover:bg-[#efedfb] cursor-pointer ">
              <img
                src={team.flag}
                alt={team.name}
                className="w-5 h-5 rounded-full mr-2"
              />
              <span className="text-sm text-black">{team.name}</span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Right button */}
      {canGoNext && (
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default TeamSlider;
