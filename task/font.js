import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter-2';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';

import { src, dest } from '../gulpfile.js';
import path from '../config/path.js';
import app from '../config/app.js';

const font = () =>
  src(path.font.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Font",
        message: error.message,
      })),
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(ttf2woff({clone: true}))
    .pipe(ttf2woff2({ clone: true }))
    .pipe(dest(path.font.dest));

export default font;