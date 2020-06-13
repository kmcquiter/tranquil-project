const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let db_handler;

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

const PORT = process.env.PORT || 6060;
const app = express();

app.set('view engine', 'ejs');

// public folder for static CSS & image files
app.use(express.static(path.join(__dirname, 'public')));



// body-parser setup
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended:true }));


app.get('/', (req, res) => {
    res.render('pages/index');  
});

app.get('/index', (req, res) => {
    res.render('pages/index');  
});

app.get('/questionnaire', (req, res) => {
    res.render('pages/questionnaire');
});

app.get('/resources', (req, res) => {
    res.render('pages/resources');
});

app.get('/your-plan', (req, res) => {
    res.render('pages/your-plan');
});

app.get('/faq', (req, res) => {
    res.render('pages/faq');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.listen(PORT, () => {
    console.log(`Tranquil server started on port ${PORT}!`);
    
    // connect to db
    let mongo_client = mongodb.MongoClient;
    mongo_client.connect(DB_URL,{ useUnifiedTopology: true }, (err, db_client) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`connected to ${DB_NAME} database.`);
            db_handler = db_client.db(DB_NAME);
        }
    })

})

app.post('/add', (req, res) => {
    // Do something here with your request body
    const form_data = req.body;
    console.log(form_data);
    const name = form_data['name'];
    const email = form_data['email'];
    const comment = form_data['comment'];

    const my_object = {
        name: name,
        email: email,
        comment: comment
    }

    console.log(my_object);

    db_handler.collection(COLLECTION_NAME).insertOne(my_object, (err, result) => {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("Contact Sucessfully Added");
            res.redirect('/');
        }
    });
});