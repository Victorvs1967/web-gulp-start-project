// PUG processing
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import pugs from 'gulp-pug';
import webpHtml from 'gulp-webp-html';
import gulpif from 'gulp-if';

import { src, dest } from '../gulpfile.js';
import path from '../config/path.js';
import app from '../config/app.js';

const pug = () =>
  src(path.pug.src)
    // Error handler
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "PUG",
        message: error.message,
      })),
    }))
    // PUG processing
    .pipe(pugs(app.pug))
    .pipe(gulpif(app.isProd, webpHtml()))
    .pipe(dest(path.pug.dest));

export default pug;