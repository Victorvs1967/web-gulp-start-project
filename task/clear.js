// Rmove ./dist folder
import { deleteAsync } from 'del';

import path from '../config/path.js';

const clear = async () => await deleteAsync([path.root.concat('/index.html'), path.sass.dest, path.js.dest]);

export default clear;