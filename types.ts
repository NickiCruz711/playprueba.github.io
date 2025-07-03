
export interface Track {
  id: number;
  title: string;
  artist: string;
  albumArt: string;
  audioSrc: string;
  featuring?: string;
}

export interface Album {
  id: number;
  title: string;
  artists: string[];
  imageUrl: string;
  advisory: boolean;
  tracks?: Track[];
  albumUrl?: string;
  buyUrl?: string;
}