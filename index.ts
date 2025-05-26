import { serve } from 'bun';
import { join } from 'path';
import { readFileSync } from 'fs';

const publicDir = './';
const indexHtml = readFileSync(join(publicDir, 'index.html'), 'utf8');

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    // Serve static files
    if (url.pathname.startsWith('/dist/')) {
      try {
        const filePath = join(publicDir, url.pathname);
        const file = Bun.file(filePath);
        return new Response(file);
      } catch (error) {
        return new Response('Not Found', { status: 404 });
      }
    }
    
    // For all other routes, serve the index.html
    return new Response(indexHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});

console.log('Server running at http://localhost:3000');

