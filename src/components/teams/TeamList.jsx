import React from 'react';

const TeamList = ({data}) => {
    return (
      <div className=" space-y-4">
        <div className=" flex justify-end">
          <input
            type="text"
            placeholder="search"
            className=" text-sm p-6 bg-white w-44 h-10 rounded-full"
          />
        </div>
        <ul className=" bg-white px-8 py-4 rounded-xl">
          {data.map((team) => (
            <li
              key={team.n}
              className="flex items-center  border-b py-4 text-base gap-4   "
            >
              <img
                src="https://flagcdn.com/in.svg"
                alt={team.n}
                className="w-12 h-12 object-cover border rounded-full mr-2"
              />
              <div>
                <span className="text-base hover:underline hover:transition duration-500 cursor-pointer text-black">
                  {team.n}
                </span>
                {team.c ? (
                  <h2 className="text-xs text-gray-600">{team.c}</h2>
                ) : (
                  ""
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TeamList;