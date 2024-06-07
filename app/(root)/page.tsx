import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

const HomePage = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
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
