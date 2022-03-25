const express = require('express');
const { create } = require('express-handlebars');

const app = express();

// configuracion del hbs
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/components'],
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
// fin de la configuracion del hbs

// exposición de la carpeta public
app.use(express.static(__dirname + '/public'))

app.use('/',require('./routes/home'));
app.use('/auth', require('./routes/auth'));

// escucha del puerto donde se va a desarrollar la aplicación
app.listen(5000, () => console.log('server running 🔴 🟠 🟡 🟢'));







