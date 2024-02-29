const express=require("express")
const router=express.Router()

const {inputEmail,getAllInput}=require("../controllers/File")

router.post("/emailInput",inputEmail)
router.get("/getAllInput",getAllInput)
module.exports=router;