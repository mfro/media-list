export interface Result {
  /** image: url, width, height */
  i: [string, number, number];
  /** id */
  id: string;
  /** title / label */
  l: string;
  /** subtitle / sublabel */
  s: string;
}

export interface NameResult extends Result { }
export interface VideoResult extends Result { }
export interface FeatureResult extends Result {
  q: 'feature';
  /** year */
  y: number
  /** videos */
  v?: VideoResult[];
  vt?: number;
}

export async function suggestions(query: string) {
  query = query.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/ /g, '_');

  if (query.length == 0) return [];

  return new Promise(resolve => {
    const callbackName = `imdb$${query}`;
    const callbackTarget = window as any;

    callbackTarget[callbackName] = (rsp: any) => {
      delete callbackTarget[callbackName];
      document.head.removeChild(script);

      resolve(rsp.d);
    };

    const script = document.createElement('script');
    script.src = `https://sg.media-imdb.com/suggests/${query[0]}/${query}.json`;
    script.async = true;
    document.head.appendChild(script);
  });
}
