const news = require("./model");


const getAllnewsHandler = async(req,res)=>
{
    try {
        const data=  await news.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}

const addnewsHander = async (req,res)=>{
  
   
        const {title,description,url,urlToImage}= req.body;
        
       
         
       
        
               
                const news1 = new news({title,description,url,urlToImage})
                const data = await news1.save()
               res.json({message:"success",data})
           
         
        
   
    

}

module.exports ={
    getAllnewsHandler,
    addnewsHander
}