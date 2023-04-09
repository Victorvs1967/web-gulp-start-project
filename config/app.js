import { readFileSync } from 'fs';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

const app = {
  isProd: isProd,
  isDev: isDev,
  htmlmin: { 
    collapseWhitespace: isProd 
  },
  pug: {
    doctype: 'html',
    pretty: isDev,
    data: {
      news: [ ...JSON.parse(readFileSync('./data/news.json')) ],
    }
  },
  sass: {
    outputStyle: isProd ? 'compressed' : 'expanded',
  },
  rename: {
    basename: 'main',
    suffix: '.min',
  },
  webpack: {
    mode: isProd ? "production" : "development",
    output: {
      filename: 'main.min.js'
    }
  },
  imagemin: {
    verbose: true
  },
  fonter:{
    formats: ["ttf", "otf", "woff", "svg"],
  },
};

export default app;