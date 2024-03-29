const express = require('express');
const router = express.Router();

const users = require('../controllers/user')

router.get('/users', users.getUsers);
router.post('/users', users.createUser);
router.patch('/users', users.updateUser);
router.delete('/users/:id', users.deleteUser);

module.exports = router
