const express = require('express');
const multer = require('multer');
const gm = require('gm');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5137;

app.set('view engine', 'ejs');

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploaded_images');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  const filterType = req.body.filter_type || 'original';

  try {
    const image = gm(imagePath);
    const metadata = await image.metadata();
    const editedImagePath = `public/edited_images/edited_${path.basename(imagePath)}`;

    // Apply the selected filter
    if (filterType === 'blur') {
      await image.blur();
    } else if (filterType === 'sharpen') {
      await image.sharpen();
    }

    await image.toFile(editedImagePath);

    res.render('index', {
      originalImage: req.file.filename,
      editedImage: `edited_${req.file.filename}`,
    });
  } catch (err) {
    console.error('Error processing image:', err);
    return res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${5173}`);
});