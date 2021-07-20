import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/albums.js';

const app = express();
const PORT = process.env.PORT || 1010;

app.use(bodyParser.json());
app.use('/albums', usersRoutes);
app.get('/', (req, res) => {
res.send('hello from api homepage');
});
app.listen(PORT, () => console.log(`Server running on port: http://localhost: ${PORT}`));
