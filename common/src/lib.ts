import { DataInstanceFrom, defineModel } from '@mfro/simpledata/common';

export interface Data {
  movies: Movie[];
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

export type DataInstance = DataInstanceFrom<typeof model>;
export const model = defineModel({
  init: (): Data => ({
    movies: [],
  }),

  save: data => data as any,
  load: json => json as any,

  mutations: {
    ADD_MOVIE(data, movie: Movie) {
      data.movies.push(movie);
    },

    DEL_MOVIE(data, index: number) {
      data.movies.splice(index, 1);
    },
  },
});
