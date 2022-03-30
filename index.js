const express = require('express');
const { create } = require('express-handlebars');

require('dotenv').config();
require('./database/db');

const app = express();

// configuracion del hbs
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/components'],
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
// fin de la configuracion del hbs

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use('/',require('./routes/home'));
app.use('/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;


// escucha del puerto donde se va a desarrollar la aplicación
app.listen(PORT, () => console.log('server running 🔴 🟠 🟡 🟢 on port: ' + PORT));







