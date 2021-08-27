const path = require('path');
const express =  require ('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Desarrolladores = require('./api/desarrolladores')

//settings o configuraciones iniciales
app.set('port', process.env.PORT || 3000);

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/desarrolladores', Desarrolladores);

mongoose.connect(
    "mongodb://localhost/desarrolladores",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(4000, () => {
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)