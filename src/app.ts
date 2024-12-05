import express from 'express';
import cors from 'cors';
import useRoues from './routes/user.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', useRoues);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});