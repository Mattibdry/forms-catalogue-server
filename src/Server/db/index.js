import mysql from 'mysql';
import config from '../config/index.js';

import forms from './forms'

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) console.log(err);
});

export default {
    forms
}