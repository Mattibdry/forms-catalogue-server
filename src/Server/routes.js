import * as express from 'express';


import DB from './db'


const router = express.Router();


router.get('/api/forms', async (req, res) => {
    try {
    let forms = await DB.forms.all();
    res.json(forms);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});


export default router;