const fs = require('fs');
const variables = require("../config/confijg.js");
const mysql = require('mysql');
const csv = require('fast-csv');

const db = mysql.createConnection({
    host: variables.HOST,
    user: variables.USER,
    password: variables.PASSWORD,
    database: variables.DATABASE
});

const filter = async (req, res) => {
    const min = req.params.min;
    const max = req.params.max;
    const room = req.params.rooms;
    db.query(`select * from TEMPORAL where precio > ${min} and precio < ${max} and Habitaciones != ''`, (err,rows) => {
        if(err) throw err;

        let rooms = [];
      
        rows.forEach( (row) => {
            if( row.Habitaciones === room) rooms.push( row );
        });
        res.send( rooms );
        return;
    });
    return;
    res.sendStatus(
        200
    )
};

const addFile = async (req, res) => {
    const { path } = req.body;
    const result = UploadCsvDataToMySQL(path);
    res.sendStatus(200).send(result);
};

const report = async (req, res) => {
    
};

const UploadCsvDataToMySQL = (filePath) => {
    let stream = fs.createReadStream(filePath);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            // Remove Header ROW
            csvData.shift();
            // Open the MySQL connection
            db.connect((error) => {
                if (error) {
                    console.error(error);
                } else {
                    let query = 'INSERT INTO TEMPORAL (Latitud, Longitud, ID, Titulo, Anunciante, Descripcion, Reformado, Telefonos, Tipo, Precio, Precio_por_metro, Direccion, Provincia, Ciudad, Metros_cuadrados, Habitaciones, Banios, Parking, Segunda_mano, Armarios_Empotrados, Construido_en, Amueblado, Calefaccion_individual, Certificacion_energetica, Planta, Exterior, Interior, Ascensor, Fecha, Calle, Barrio, Distrito, Terraza, Trastero, Cocina_Equipada, Cocina_equipada_, Aire_acondicionado, Piscina, Jardin, Metros_cuadrados_utiles, Apto_para_personas_con_movilidad_reducida, Plantas, Se_admiten_mascotas, Balcon) VALUES ?';
                    db.query(query, [csvData], (error, response) => {
                        console.log(error || response);
                    });
                }
            });
            // delete file after saving to MySQL database
            // -> you can comment the statement to see the uploaded CSV file.
        });
    stream.pipe(csvStream);
    return 1;
}

module.exports = {
    filter,
    addFile
}