const express = require('express');
const { randomBytes } = require('crypto');
const cors =  require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin: ['http://localhost:3000']}));

const posts = {};http://localhost:3000/

app.get('/posts', (req, res) => {
    res.send(posts);
 });

app.post("/posts", (req, res) => { 
    const id = randomBytes(5).toString('hex');
    const { title } = req.body;
    
    posts[id] = { id, title };
    res.status(201).send(posts[id]);
});

app.listen(4000, () => { 
    console.log('Listening on port 4000 ...');
})