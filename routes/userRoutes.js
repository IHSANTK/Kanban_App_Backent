const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/signup', UserController.createUser);
router.post('/login', UserController.loginUser);
router.post('/logout', UserController.logoutUser); 
router.post("/addtask",UserController.addtask)

router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;