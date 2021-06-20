const router = require("express").Router();
const {getUsers, addUser, deleteUser} = require("../controllers/usersController");

//getAll
router.get("/", getUsers);

//addUser
router.post("/", addUser);

//deleteUser
router.delete("/:id", deleteUser);

module.exports = router;