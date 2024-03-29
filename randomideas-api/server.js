const express = require('express');
const port = 5000;

const app = express();

const ideas = [
    {
        id: 1,
        text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news',
        tag: 'Technology',
        username: 'Tony Stark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different a color the older that you milk is getting',
        tag: 'Inventions',
        username: 'SteveRogers',
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
        tag: 'Software',
        username: 'BruceBanner',
        date: '2022-01-02',
    },
];

//Get all ideas
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the RandomIdeas API' });
});

app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    
    if (!idea) {
       return res.status(404).json({ success:false, error: 'Resource not found' });
    }

    res.json({ success: 'true', data: idea });
});


app.listen(port, () => console.log(`Server listening on port ${port}`));