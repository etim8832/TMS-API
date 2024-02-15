const userService = require("../services/user")

const getUsers = async (req, res) => {
    try {
       const users = await userService.getUsers()
       return res.status(200).send(users)
    } catch (error) {
        return res.send('error')
    }
};

const createUser = async (req, res) => {
    try {
        const body = req.body
        const results = await userService.createUser(body)
        const data = {
            id: results.rows[0].id.trim()
        }

        return res.status(200).send(data)
    } catch (error) {
        return res.send('error')
    }
};


const updateUser = async (req, res) => {
    try {
        const body = req.body
        await userService.updateUser(body)
        const data = {
            message: 'complete'
        }
        return res.status(200).send(data)
    } catch (error) {
        return res.send('error')
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        await userService.deleteUser(id)

        const data = {
            message: 'complete'
        }

        return res.status(200).send(data)
    } catch (error) {
        return res.send('error')
    }
};



module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};