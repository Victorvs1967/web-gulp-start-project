// HTML processing
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import webpHtml from 'gulp-webp-html';

import { src, dest } from '../gulpfile.js';
import path from '../config/path.js';
import app from '../config/app.js';

const html = () =>
  src(path.html.src)
    // Error handler
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message,
      })),
    }))
    // include - template processing
    .pipe(fileinclude())
    .pipe(htmlmin(app.htmlmin))
    // Files size
    .pipe(size({ title: "Before compressed" }))
    // Compressed html
    .pipe(webpHtml())
    // Files size
    .pipe(size({ title: "After compressed" }))
    .pipe(dest(path.html.dest));

export default html;
