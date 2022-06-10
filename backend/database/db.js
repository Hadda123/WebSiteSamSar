
const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb+srv://hadda:zCoJLBjGHlWfhO8q@cluster0.q2tym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        
        }); 
        console.log('Database Connection Success');
  
        }
        
    catch(err){
        console.log(err);
    }
    

    };

    module.exports = { connectDB };