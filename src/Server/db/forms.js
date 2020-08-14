import { Connection } from './index.js';

export const all = async () => {
    return new Promise((resolve, reject) => {

        Connection.query('SELECT * FROM forms', (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all
}