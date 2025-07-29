const express = require('express');
const app = express();
app.get('/products', (req, res) => res.json([{ id: 1, name: "Llibre" }]));
app.listen(3002, () => console.log('Servei productes escoltant a 3002'));
