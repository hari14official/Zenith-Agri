import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if ([301, 302, 307].includes(res.statusCode)) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Status: ' + res.statusCode));
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => fs.unlink(destPath, () => reject(err)));
    }).on('error', reject);
  });
}

// Using picsum.photos - extremely reliable, no auth needed, always available
const urls = [
  // General farming / fields (hero images)
  { id: 'hero1',   url: 'https://picsum.photos/seed/farmfield/1920/1080' },
  { id: 'hero2',   url: 'https://picsum.photos/seed/tractor/1920/1080' },
  { id: 'hero3',   url: 'https://picsum.photos/seed/harvest/1920/1080' },
  { id: 'hero4',   url: 'https://picsum.photos/seed/agri/1920/1080' },
  // Specific crop images
  { id: 'paddy',   url: 'https://picsum.photos/seed/paddy123/1200/800' },
  { id: 'tomato',  url: 'https://picsum.photos/seed/tomato123/1200/800' },
  { id: 'sugarcane', url: 'https://picsum.photos/seed/sugar123/1200/800' },
  { id: 'organic', url: 'https://picsum.photos/seed/organic1/1200/800' },
  { id: 'orchard', url: 'https://picsum.photos/seed/orchard1/1200/800' },
  { id: 'irrigation', url: 'https://picsum.photos/seed/water123/1200/800' },
  // Content / About page
  { id: 'about1',  url: 'https://picsum.photos/seed/farmer1/1600/900' },
  { id: 'about2',  url: 'https://picsum.photos/seed/farmer2/1600/900' },
  { id: 'about3',  url: 'https://picsum.photos/seed/farmer3/1600/900' },
  // Login / Signup
  { id: 'login',   url: 'https://picsum.photos/seed/farmlogin/2000/1100' },
  { id: 'signup',  url: 'https://picsum.photos/seed/farmsignup/2000/1100' },
];

async function main() {
  for (const item of urls) {
    const dest = path.join(dir, `${item.id}.jpg`);
    if (fs.existsSync(dest)) {
      console.log('Skip (exists): ' + item.id);
      continue;
    }
    try {
      await downloadFile(item.url, dest);
      console.log('Done: ' + item.id);
    } catch (e) {
      console.error('Fail: ' + item.id, e.message);
    }
  }
  console.log('All done!');
}
main();
