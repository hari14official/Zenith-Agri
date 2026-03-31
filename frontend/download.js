import axios from 'axios';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const videosDir = path.join(__dirname, 'public', 'videos');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

const images = {
  'hero1.jpg': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600',
  'hero2.jpg': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1600',
  'hero3.jpg': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1600',
  'hero4.jpg': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1600',
  'paddy.jpg': 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200',
  'tomato.jpg': 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=1200',
  'sugarcane.jpg': 'https://images.unsplash.com/photo-1615485240384-55449af94017?auto=format&fit=crop&q=80&w=1200',
  'organic.jpg': 'https://images.unsplash.com/photo-1623348123518-e398188159b3?auto=format&fit=crop&q=80&w=1200',
  'irrigation.jpg': 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=1200',
  'orchard.jpg': 'https://images.unsplash.com/photo-1521033335976-b47fefb250c5?auto=format&fit=crop&q=80&w=1200',
  'about1.jpg': 'https://images.unsplash.com/photo-1499529112087-3cb3b73cfe95?auto=format&fit=crop&q=80&w=1600',
  'about2.jpg': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1600',
  'about3.jpg': 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=1600',
  'agri_1.jpg': 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
  'agri_2.jpg': 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800',
  'agri_3.jpg': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800',
  'agri_5.jpg': 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800',
  'agri_6.jpg': 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800',
  'agri_8.jpg': 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800',
  'agri_9.jpg': 'https://images.unsplash.com/photo-1530836361280-1a06667c2290?auto=format&fit=crop&q=80&w=800',
  'agri_10.jpg': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
  'agri_11.jpg': 'https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&q=80&w=800',
  'login.jpg': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1600',
  'signup.jpg': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600'
};

const videos = {
  'agriculture.mp4': 'https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-in-a-sunny-rice-field-20411-large.mp4'
};

async function downloadFile(url, targetPath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    const writer = fs.createWriteStream(targetPath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
}

console.log('Downloading assets...');
for (const [name, url] of Object.entries(images)) {
  console.log(`Downloading image: ${name}`);
  await downloadFile(url, path.join(imagesDir, name));
}
for (const [name, url] of Object.entries(videos)) {
  console.log(`Downloading video: ${name}`);
  await downloadFile(url, path.join(videosDir, name));
}
console.log('Done.');
