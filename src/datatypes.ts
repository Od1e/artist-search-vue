type topAlbumsResponse = {
  topalbums: TopAlbums;
};

type similarArtistsResponse = {
  similarartists: SimilarArtists;
};

type TopAlbums = {
  album: Array<albums>;
  "@attr": {
    artist: string;
    page: number;
    perPage: number;
    totalPages: number;
    total: number;
  };
};

type SimilarArtists = {
  artist: Array<artists>;
  "@attr": {
    artist: string;
  };
}

type albums = {
  name: string;
  playcount: number;
  mbid: string;
  url: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: Array<images>;
};

type artists = {
  name: string;
  mbid: string;
  match: number;
  url: string;
  image: Array<images>;
  streamable: number;
};

type images = {
  "#text": string;
  size: string;
};

export { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images };
