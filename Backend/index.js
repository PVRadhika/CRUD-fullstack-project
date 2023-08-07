const express = require('express')
//const mongoose = require('mongoose')
const cors = require('cors')
//const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//mongoose.connect("mongodb://127.0.0.1:27017/curd")


const db = require('./models');
db.mongoose
.connect(db.url)
.then(()=>{
    console.log("Database is connected!");
    })
.catch((err)=>{
    console.log("Failed to connect Database!");
    process.exit();
    });
//sample entry point
app.get("/",(req,res)=>{
    res.json({message:"welcome to curd backend!"});
});

require("./routes/user.routes")(app);

const PORT = process.env.PORT || 3001;

 app.listen(PORT, ()=>{
   console.log("Server is running at port" +PORT)
})

// app.get('/', (req,res) => {
//     UserModel.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))

// })

// app.get('/getUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findById({_id:id})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))

// })

// app.put('/updateUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate(id, {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname, 
//         email: req.body.email, 
//         phone: req.body.phone})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))

// })

// app.delete('/deleteUser/:id', (req, res) =>{
//     const id = req.params.id;
//     UserModel.findByIdAndDelete(id)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.post("/createUser", (req,res) => {
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("server is Running")
// })