export interface Video {
  title: string;
  subtitle: string;
  url: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
}

const videos: Video[] = [
  {
    title: "2016 Development Showcase",
    subtitle: "Full Sail University",
    url: "showcase-2016",
    duration: "6:51",
    thumbnail: "showcase-2016.jpg",
    youtubeId: "hwcWUzD-uw0",
  },
  {
    title: "2017 Development Showcase",
    subtitle: "Full Sail University",
    url: "showcase-2017",
    duration: "21:42",
    thumbnail: "showcase-2017.jpg",
    youtubeId: "6oaQDaxc75I",
  },
];

export default videos;
