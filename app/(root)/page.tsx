"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

const HomePage = () => {
  // const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
        </div>

        <div className="podcast_grid">
          {podcastData.map((podcast) => {
            const { imgURL, title, description, id } = podcast;
            return (
              <PodcastCard
                key={podcast.id}
                imgUrl={imgURL}
                title={title}
                description={description}
                podcastId={id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default HomePage;
