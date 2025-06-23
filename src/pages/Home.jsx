import DownloadApp from '@/components/shared/DownloadApp';
import FollowUs from '@/components/shared/FollowUs';
import LatestPolls from '@/components/home/mainSection/latestPolls/LatestPolls';
import Sidebar from '@/components/home/mainSection/Sidebar';
import TopStories from '@/components/home/mainSection/TopStories';
import MatchList from '@/components/home/matchList/MatchList';
import TeamSlider from '@/components/home/teamList/TeamSlider';
import React from 'react';

const Home = () => {
    return (
      <div>
        <MatchList></MatchList>
        <TeamSlider></TeamSlider>
        <div className="py-24 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Sidebar />
          </div>
          <div className="md:col-span-2">
            <div className="space-y-8">
              <TopStories />
           <LatestPolls></LatestPolls>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="space-y-8">
           
              <DownloadApp />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;