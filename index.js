const express = require('express');
const port = 8000;
const app = express();

const expressLayout = require('express-ejs-layouts'); //---- to use layout

//access all the static file
    app.use(express.static('./assets'));
    
app.use(expressLayout);

//extract style and script from sub pages into layout.ejs
    app.set('layout extractStyles',true);
    app.set('layout extractScripts',true);

//----using ejs Template
    app.set('view engine','ejs');
    app.set('views','./views');


app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:',err);
        return;
    }
    console.log('Server is up and runinng at port: ',port );
})