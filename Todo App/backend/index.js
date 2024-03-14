import { createTodo, updateTodo } from './types';
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/todos', function(req, res){
    res.json({
        msg: "Hi There"
    });
});

app.post('/todo', function(req, res){

});

app.put('/completed', function(req, res){

});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})