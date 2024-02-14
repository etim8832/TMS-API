// const Pool = require('pg').Pool
const CONNECT_DB = require("../config/connectDB");

module.exports = (app) => {
    app.get("/", (req, res) => {
        try {
            // for test connection db and query
            CONNECT_DB.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
                if (error) {
                throw error
                }
                res.status(200).json(results.rows)
            })

            // pool.query('INSERT INTO users (id, department_id, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *', ['2', '2', 'pongsak', 'phanomsuk'], (error, results) => {
            //     if (error) {
            //     throw error
            //     }
            //     console.log('show finist')
            //     res.status(201).send(`User added with ID: ${results.rows[0].id}`)
            // })

        } catch (error) {
            console.log('show error -> ', error)
        }
    });
    return app
};

