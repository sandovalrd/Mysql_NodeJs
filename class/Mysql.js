const mysql = require('mysql');

class Mysql {

    constructor() {
        this.conectado = false;
        this.instance = 1;

        console.log('Clase MySql inicializada!');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.conectar();
    }

    conectar() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
                return
            }
            this.conectado = true;
            console.log('Base de datos OnLine!');
            return;
        });
    }

    ejecutarQuery(query, callback) {
        this.connection.query(query, (err, result, fields) => {
            if (err) {
                return callback({ status: "Error", message: err.message });
            }
            if (result.length === 0) {
                return callback({ status: "Error", message: "No hay registros!" });
            }
            return callback(null, result);

        });
    }
}

module.exports = {
    Mysql,
}