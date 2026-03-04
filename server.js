import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3001;

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Via backend is running' });
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});