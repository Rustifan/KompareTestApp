const router = require("express").Router();
const catchAsync = require("../errors/catchAsync");
const validateUser = require("../validation/validateUser");
const {getUsers, addUser, deleteUser} = require("../controllers/usersController");


//getAll
router.get("/", catchAsync(getUsers));

//addUser
router.post("/",validateUser, catchAsync(addUser));

//deleteUser
router.delete("/:id", catchAsync(deleteUser));

module.exports = router;