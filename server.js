const express = require ('express');
const apiRoutes = require ('./routes/apiroutes')
const htmlRoutes = require ('./routes/htmlroutes');
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});