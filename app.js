const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', (req, res) => res.send('Insert /square?string=my_string'))
 
app.get('/square', (req, res) => {
   res.json([{result: string_square(req.query.string)}])
});
 
app.listen(PORT, () => console.log('Example app listening on port'+ PORT))

function string_square(s){
    if(typeof s === 'string') {
        var returnObj = (s.length)*(s.length);
    } else {
        var returnObj = -1;
    }
    return returnObj;
}