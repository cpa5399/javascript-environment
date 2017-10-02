/* eslint-disable no-unused-vars */
import css from './index.css';
import numeral from 'numeral';

const value = numeral(1000).format('$0,0.00');
console.log(`This chicken costs ${value}`); //eslint-disable-line no-console
