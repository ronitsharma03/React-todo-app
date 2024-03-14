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
    // const title = req.body.title;
    // const description = req.body.description;

    // const validated = createTodo.safeParse(title, description);

    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return;
    }
});

app.put('/completed', function(req, res){

    const updatePayload = req.body;
    const parsedIdPayload = updateTodo.safeParse(updatePayload);

    if(!parsedIdPayload.success){
        res.status(411).json({
            msg:"Something up with the inputs"
        })
    }
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})