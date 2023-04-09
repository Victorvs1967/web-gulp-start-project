import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpCss from 'gulp-webp-css';

import { src, dest } from '../gulpfile.js';
import path from "../config/path.js";
import app from '../config/app.js';

const sass = gulpSass(dartSass);

const styles = () =>
  src(path.sass.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SASS",
        message: error.message,
      })),
    }))
    .pipe(sass(app.sass))
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(rename(app.rename))
  .pipe(dest(path.sass.dest, { sourcemaps: app.isDev }));

export default styles;