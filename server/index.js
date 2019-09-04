const bodyParser = require('body-parser');
const services = require('../services/index');
const { app } = services;
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rutas
require('../routes/index')(services);

app.get('/', (req, res) => {
    res.send('Hello Word!');
})

app.listen(port, () => {
    console.log('Escuchando puerto: ', port);
});