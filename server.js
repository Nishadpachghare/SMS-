// server.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const app = express();
const PORT = 3000;

let imageUrls = [];

// Read CSV once on server start
fs.createReadStream(path.resolve('cloudinary_assets.csv'))
  .pipe(csv())
  .on('data', (row) => {
    if (row.secure_url) {
      imageUrls.push(row.secure_url);
    }
  })
  .on('end', () => {
    console.log('CSV file loaded:', imageUrls.length, 'images');
  });

// API route to get images
app.get('/api/images', (req, res) => {
  res.json({ images: imageUrls });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
