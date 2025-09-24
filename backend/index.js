const express = require('express');
const cors = require('cors');
const Port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'John Doe', email: 'John@gmail'},
    {id: 2, name: 'Jane Smith', email: 'Jane@gmail'},
    {id: 3, name: 'Alice Johnson', email: 'Alice@gmail'}
]

let tasks = [{id:1,text:"Walking",done:false}];

app.get('/users', (req,res) => {
    res.json(users);
})

app.get('/tasks', (req,res) => {
    res.json(tasks);
})

app.post('/tasks', (req,res) => {
    const newtask = {
        id: tasks.length+1,
        text:req.body.text,
        done:false
    }
    tasks.push(newtask)
    res.json(tasks)
})

app.post('/users', (req,res) => {
    const newuser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newuser);
    res.json(users);
})

app.put('/tasks/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find( t => t.id === id);
    task.done = req.body.done;
    res.json(tasks);
})

app.put('/users/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(users);
})

app.delete('/tasks/:id', (req,res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id)
    res.json(tasks);
})

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  users.splice(index, 1);
  res.json(users);
});


app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});