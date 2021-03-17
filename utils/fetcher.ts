import fetch from 'unfetch';

export const fetcher = (url: string) => fetch(url).then(r => r.json());
