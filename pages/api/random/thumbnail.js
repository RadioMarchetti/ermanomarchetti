import path from 'path';
import fs from 'fs';

export default async function (req, res) {
  const filePath = path.resolve('./files', 'thumbnails')

  const files = fs.readdirSync(filePath)

  var num = Math.floor(Math.random() * files.length)

  var image = path.join(filePath, files[num])

  var stat = fs.statSync(image);

  res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(image);
  readStream.pipe(res);
}