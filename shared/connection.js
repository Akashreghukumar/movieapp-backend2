const mongoose=require('mongoose')
exports.connect=()=>{
    try{
        mongoose.connect('mongodb+srv://akash:akash@123@cluster0.2x6pb.mongodb.net/movieappdb?retryWrites=true&w=majority')
        console.log("monggosse mondb conneced")

    }
    catch(err){
        console.log(err)

    }
}


// mongodb+srv://akash:akash@123@cluster0.2x6pb.mongodb.net/movieappdb?retryWrites=true&w=majority