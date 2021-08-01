import { buildModel, DataInstanceFrom, defineModel, defineMutations } from '@mfro/simpledata/common';

interface SaveData {
  movies: Movie[];
  watched: { [user: string]: number[] };
}

export interface Data {
  movies: Movie[];
  watched: Map<string, Set<Movie>>;
}

export interface Movie {
  q: 'feature';
  /** image: url, width, height */
  i: [string, number, number];
  /** id */
  id: string;
  /** title / label */
  l: string;
  /** subtitle / sublabel */
  s: string;
  /** year */
  y: number;
}

const base = defineModel<Data, SaveData>({
  init: () => ({
    movies: [],
    watched: new Map(),
  }),

  save: data => {
    const movies = [...data.movies];

    const watched = {} as { [user: string]: number[] };
    for (const [user, set] of data.watched)
      watched[user] = [...set].map(m => movies.indexOf(m));

    return { movies, watched } as any;
  },
  load: raw => {
    const movies = [...raw.movies];

    const watched = new Map();
    for (const user in raw.watched) {
      const set = new Set(raw.watched[user]);
      watched.set(user, set);
    }

    return { movies, watched };
  },
});

const mutations = defineMutations(base, {
  ADD_MOVIE(data, movie: Movie) {
    data.movies.push(movie);
  },

  DEL_MOVIE(data, index: number) {
    data.movies.splice(index, 1);
  },

  WATCH_MOVIE(data, user: string, index: number) {
    const movie = data.movies.splice(index, 1)[0];

    let set = data.watched.get(user);
    if (!set) data.watched.set(user, set = new Set);

    set.add(movie);
  },
});

export const model = buildModel(base, mutations);
export type DataInstance = DataInstanceFrom<typeof model>;
