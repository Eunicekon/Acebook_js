var express = require('express');
var router = express.Router();


var UserController = require('../controllers/user');


router.get('/', UserController.Index);
router.post('/', UserController.Create);
router.post('/logout', UserController.Logout);




module.exports = router;
// router.get('/', PostsController.Index);
