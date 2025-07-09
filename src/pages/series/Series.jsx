import AllSeries from '@/components/series/AllSeries';
import DownloadApp from '@/components/shared/DownloadApp';
import FollowUs from '@/components/shared/FollowUs';
import React from 'react';

const Series = () => {
    return (
      <div className=" py-12">
        <h2 className=" text-xl font-semibold">Seasons/Series</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-12">
          <div className=" col-span-3">
            <AllSeries></AllSeries>
            {/* <TeamList data={players}></TeamList> */}
          </div>
          <div className="col-span-1 space-y-4">
            <DownloadApp></DownloadApp>
            <FollowUs></FollowUs>
          </div>
        </div>
      </div>
    );
};

export default Series;