import { sum } from './include/func.js';

const newses = document.querySelectorAll('.news');

newses.forEach(news => news.addEventListener('click', () => console.log('News')));
console.log(sum(8, 5));
