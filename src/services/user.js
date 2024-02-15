
const CONNECT_DB = require("../config/connectDB");

const getUsers = async (req, res) => {
    try {
        const users = new Promise((resolve, reject) => {
            CONNECT_DB.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
                if (error) {reject(error)}
                resolve(results.rows);
            })
        });

        return users
    } catch (error) {
        return res.send('error')
    }
};

const createUser = async (body) => {
    try {
        const query = `
          INSERT INTO users (department_id, first_name, last_name)
          VALUES (${body.department_id}, '${body.first_name}', '${body.last_name}')
          RETURNING *
        `

        const id = new Promise((resolve, reject) => {
            CONNECT_DB.query(`${query}`, (err, results) => {
                if (err) {reject(err)}
                resolve(results)
            })
        });
        return id
    } catch (error) {
        return error
    }
};


const updateUser = async (body) => {
    try {
        const query = `
          UPDATE users
          SET department_id = ${body.department_id}, first_name = '${body.first_name}', last_name = '${body.last_name}'
          WHERE id = ${body.id}
        `

        const results = new Promise((resolve, reject) => {
            CONNECT_DB.query(`${query}`, (err, results) => {
                if (err) {reject(err)}
                resolve(results)
            })
        });
        return results
    } catch (error) {
        return error
    }
};

const deleteUser = async (id) => {
    try {
        const query = `
          DELETE FROM users
          WHERE id = ${id}
        `
        const results = new Promise((resolve, reject) => {
            CONNECT_DB.query(`${query}`, (err, results) => {
                if (err) {reject(err)}
                resolve(results.rowCount)
            })
        });

        return results
    } catch (error) {
        return error
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};