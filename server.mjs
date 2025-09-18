import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = __dirname;

const app = express();
app.use(express.json());

// Basic CORS for local dev
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Static files
app.use('/assets', express.static(path.join(ROOT, 'assets')));
app.use('/certifications', express.static(path.join(ROOT, 'certifications')));
app.use('/imgs', express.static(path.join(ROOT, 'imgs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
