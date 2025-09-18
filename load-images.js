import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dk0ehzodv',
  api_key: '163925927261136',
  api_secret: 'FlvYmgR6O0JeFYVlDtGNsOStt48'
});

const images = [];

const csvFilePath = path.resolve('D:/Sms website/sms website/cloudinary_assets.csv');

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    images.push(row);
  })
  .on('end', async () => {
    console.log(`📝 CSV processed. Found ${images.length} entries.`);

    for (const image of images) {
      try {
        const filePath = path.resolve(process.cwd(), image.local_path);

        if (!fs.existsSync(filePath)) {
          console.error(`❌ File not found: ${filePath}`);
          continue;
        }

        const uploadOptions = {};

        if (image.public_id) uploadOptions.public_id = image.public_id;
        if (image.folder) uploadOptions.folder = image.folder;
        uploadOptions.overwrite = true;

        const result = await cloudinary.uploader.upload(filePath, uploadOptions);

        console.log(`✅ Uploaded: ${image.local_path}`);
        console.log(`   Public ID: ${result.public_id}`);
        console.log(`   URL: ${result.secure_url}`);
      } catch (error) {
        console.error(`❌ Error uploading ${image.local_path}:`, error.message);
      }
    }

    console.log('🔥 All done!');
  })
  .on('error', (error) => {
    console.error('❌ Error reading CSV:', error);
  });
