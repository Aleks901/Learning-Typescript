import express from 'express';
import { createUser } from './controllers/UserController';
// Testing project for a node.js backend using express.


const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

console.log(typeof createUser)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

