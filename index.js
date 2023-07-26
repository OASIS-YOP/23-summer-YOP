const express = require('express');
const { nanoid } = require('nanoid');
const cors = require('cors');
const app = express();
const PORT = 5137;

app.use(express.json());
app.use(cors());

const fs = require('fs');
const path = require('path');

function saveImage(dataUrl, format) {
    const validFormats = ['png', 'jpeg', 'jpg'];
    const regex = new RegExp(`^data:image\\/(?:${validFormats.join('|')});base64,`);
    const base64Data = dataUrl.replace(regex, "");

    const ext = validFormats.includes(format) ? format : 'png';
    const filename = `image_${Date.now()}.${ext}`;
    const imagePath = path.join(__dirname, 'images', filename);


  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, base64Data, 'base64', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filename);
      }
    });
  });
}

app.post('/api/saveImage', async (req, res) => {
  try {
    const { dataUrl, format } = req.body;
    const savedFileName = await saveImage(dataUrl, format);
    res.json({ filename: savedFileName });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save the image.' });
  }
});

app.get('/api/loadImage/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, 'images', filename);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).json({ error: 'Image not found.' });
    } else {
      const dataUrl = `data:image/png;base64,${data.toString('base64')}`;
      res.json({ dataUrl });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${5137}`);
});
