import { createTodo, updateTodo } from './types';
import { todo } from './db';
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/todos', async function(req, res){
    
   const foundTodo = await todo.find({});
    res.json({
        foundTodo
    });
});

app.post('/todo', async function(req, res){
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    });
    res.json({
        msg: "Todo created successfully"
    })
});

app.put('/completed', async function(req, res){

    const updatePayload = req.body;
    const parsedIdPayload = updateTodo.safeParse(updatePayload);

    if(!parsedIdPayload.success){
        res.status(411).json({
            msg:"Something up with the inputs"
        });
    }

    await todo.update({
        _id: req.body.id
    },
    {
        completed: true
    });

    res.json({
        msg: "Todo marked as done"
    });
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})