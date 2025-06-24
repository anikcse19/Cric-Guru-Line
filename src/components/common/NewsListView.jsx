import React from 'react';
import { TiArrowForward } from "react-icons/ti";
import { Link, useLocation } from 'react-router-dom';
const NewsListView = ({data}) => {
    const loaction= useLocation();
    return (
      <div className=" space-y-4">
        <ul className=" bg-white px-8 py-4 rounded-xl">
          {data.map((team) => (
            <li
              key={team.title}
              className="flex flex-col md:flex-row w-full items-center border-b py-0 text-base gap-4   "
            >
              {loaction.pathname === "/cricket-videos" ? (
                <div>
                  <Link to={team.Link} className='relative'>
                    {" "}
                    <img
                      src={team.image}
                      alt={team.title}
                      className="md:max-w-44 md:max-h-28 w-full   object-cover border rounded-md mr-2"
                    />
                  <img src="/play.svg" className=' absolute top-[40%] left-[40%]' alt="" />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={team.Link}>
                    {" "}
                    <img
                      src={team.image}
                      alt={team.title}
                      className="md:max-w-44 md:max-h-28 w-full   object-cover border rounded-md mr-2"
                    />
                  </Link>
                </div>
              )}

              <div className=" py-3 flex-1">
                <div className=" flex items-center justify-between">
                  <Link to={team.Link}>
                    {" "}
                    <h2 className="text-xl font-semibold cursor-pointer text-black">
                      {team.title}
                    </h2>
                  </Link>

                  <div className=" text-gray-400 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
                    <TiArrowForward size={"2rem"} />
                  </div>
                </div>
                <h2 className="text-base text-gray-600">{team.time}</h2>
                <h2 className=" text-base text-black">{team.description}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default NewsListView;