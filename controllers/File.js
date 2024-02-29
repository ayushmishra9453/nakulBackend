const input=require("../model/inputModel")

exports.inputEmail=async (req,res)=>{
    try{
    const {email}=req.body;
    const existingSubscriber = await input.findOne({ email });
    if (existingSubscriber) {
        return res.status(400).json({
            success:false,
             message: 'Email already subscribed' });
      }
      const newSubscriber = new input({ email });
      const savedInput=await newSubscriber.save();
    res.status(200).json({
        success:true,
        message:"email saved"
    }) 
    }
    catch(error){
        console.log(error);
        res.status(201).json({
            success:false,
            message:"email not saved"
        })
    }
}

exports.getAllInput=async(req,res)=>{
    try{
      const subscribers= await input.find({})
      console.log(subscribers)
      return res.status(200).json({
    success:true,
    message:"all product successfully get"
      });
    }
    catch(error){
    console.log(error)
    return res.status(201).json({
        success:true,
        message:"all product not getting successfully"
          });
    }
}