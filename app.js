const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes'
];

const express = require('express')
const app = express()
const port = 3000
app.use('/css', express.static('css'));


// Transform the “body,” or contents, of the request (which is a string) into an object which we can then reference with req.body in our code.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Web Notes'))
// app.use('/', express.static('views')); // displays the index.html in the views folder

app.post('/notes', (req, res) => { 
    myNotes.push(req.body.note);
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))