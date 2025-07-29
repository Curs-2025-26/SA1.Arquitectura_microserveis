const express = require('express');
const app = express();
app.get('/users', (req, res) => res.json([{ id: 1, name: "Anna" }]));
app.listen(3001, () => console.log('Servei usuaris escoltant a 3001'));
