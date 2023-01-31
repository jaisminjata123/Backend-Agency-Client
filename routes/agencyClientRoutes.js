const {
    verifyToken,

} = require("./verifyToken");
const router = require("express").Router();
const Controller = require("../controller/agenyClient");



router.post("/create-agency-client", Controller.createAgnecyClient);
router.put("/updateClient/:id", verifyToken, Controller.updateClient);
router.get("/top-clients", verifyToken, Controller.topClientDetail);


module.exports = router;