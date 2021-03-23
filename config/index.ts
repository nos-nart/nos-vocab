const dev: boolean = process.env.NODE_ENV !== 'production';

export const server: string = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

export const DATETIME_FORMAT = {
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  l: 'MMM D, YYYY',
  lll: 'MMM D, YYYY h:mm A',
  LLL: 'MMMM D, YYYY h:mm A',
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
};
