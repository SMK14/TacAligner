const express = require('express');
const path = require('path')
const connectDB = require('./config/db')

const app = express();


//Connect Database
connectDB();


//Init MiddleWare
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running!'))

//Define Routes
app.use('/api/officeadmin', require('./routes/api/cad'))

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
