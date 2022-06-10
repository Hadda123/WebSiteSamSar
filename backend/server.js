const express = require('express');
const { connectDB }= require("./database/db");
const app = express();
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cors());

//les Routes URL
app.use('/api/categorie', require ('./routes/routerCategorie'))
app.use('/api/annonce', require ('./routes/routerAnnonce'))
app.use('/api/user', require ('./routes/routerUser'))
app.use('/api/delegation', require ('./routes/routerDelegation'))
app.use('/api/gouvernorat', require ('./routes/routerGouvernorat'))
app.use('/api/reclamation', require ('./routes/routerReclamation'))
app.use('/api/commentaire', require ('./routes/routerCommentaire'))
app.use('/uploads', express.static('uploads'));


const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  });