module.exports = ({ app, mysql }) => {
    app.get('/heroes', (req, res) => {
        const query = `Select * from heroes where 1=1`;
        mysql.ejecutarQuery(query, (err, resultado) => {
            if (err) {
                res.status(401).send(err);
            }
            res.send(resultado);
        });
    });
    app.get('/heroes/:id', (req, res) => {
        const id = req.params.id;
        const query = `Select * from heroes where id=${id}`;
        mysql.ejecutarQuery(query, (err, resultado) => {
            if (err) {
                res.status(401).send(err);
            }
            res.send(resultado);
        });
    })
}