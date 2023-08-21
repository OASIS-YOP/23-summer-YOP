const AWS = require('aws-sdk');

  const pool = new pg.Pool({
    host: "ls-756904efeec1c80565ae0f36b0ce99d91bee54b0.c3pufjijumhd.ap-northeast-2.rds.amazonaws.com",
    user: "dbmasteruser",
    password: "{>;}H58Yci.KWclQZi[=5htLtC2Yk85[",
    database : "postgres",
})

const s3 = new AWS.S3();

app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  const filterType = req.body.filter_type || 'original';

  try {
    const image = gm(imagePath);
    const metadata = await image.metadata();
    const editedImagePath = `edited_images/edited_${path.basename(imagePath)}`;

    if (filterType === 'blur') {
      await image.blur();
    } else if (filterType === 'sharpen') {
      await image.sharpen();
    }

    const editedImageBuffer = await image.toBuffer();
    
    const s3Params = {
      Bucket: 'your-s3-bucket-name',
      Key: editedImagePath,
      Body: editedImageBuffer,
      ContentType: 'image/jpeg', 
    };

    await s3.upload(s3Params).promise();

    res.render('index', {
      originalImage: req.file.filename,
      editedImage: `edited_${req.file.filename}`,
    });
  } catch (err) {
    console.error('Error processing image:', err);
    return res.sendStatus(500);
  }
});
