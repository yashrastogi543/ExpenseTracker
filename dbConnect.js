const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://21bcs249:EWqkNoPKCnFjztGz@cluster0.mljvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true, useUnifiedTopology: true
})

const connection = mongoose.connection
connection.on('error',err=>console.log(err))
connection.on('connected',()=>console.log('connected to db'))

