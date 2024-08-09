export const news= async(req, res)=>{
    try{
        
    }
    catch(err){
        console.log('Error fetching the news');
        return res.status(500).json({error:'Internal Server Error'});
    }
}