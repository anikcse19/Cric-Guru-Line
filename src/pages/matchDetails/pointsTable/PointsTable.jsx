import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPointsTable } from './Action';

import { BASE_URL } from '../../../../config';
import GroupPointTable from './GroupPointTable';

const PointsTable = () => {
    const { id } = useParams();
    const [pointsTableData, setPointsTableData] = useState(null);

    useEffect(() => {
      const fetchMatchList = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/get-match-list`);
  
          const matchData = await response.json();
          const singleMatch = matchData?.res?.tM.find(
            (match) => match.key === id
          );
             const data = await fetchPointsTable(singleMatch?.sk);
                  if (data) {
                    setPointsTableData(data);
                  }
          // assuming data is an array
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchMatchList();
    }, [id]);
    console.log("Point table data",pointsTableData)
    return (
  
        <div>
          {pointsTableData?.pts.map((group, idx) => (
            <div key={idx} className=" py-4  ">
              <h3 className="text-lg font-semibold mb-2">{group?.n}</h3>

              <div>
                {/* {group?.teams.map((team, index) => (
                  <div key={index}>
                    <h2>hi</h2>
                  </div> */}
                <GroupPointTable  teams={group?.teams} />
                {/* ))} */}
              </div>
            </div>
          ))}
        </div>
    
    );
};

export default PointsTable;