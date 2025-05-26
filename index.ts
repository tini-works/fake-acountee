import homepage from './public/index.html';
import { serve } from 'bun';

serve({
  static: {
    "/": homepage,
  },
  development: true,
  
  async fetch(req) {
    const url = new URL(req.url);
    
    // API routes would go here
    if (url.pathname.startsWith('/api/')) {
      return new Response('API endpoint not implemented', { status: 501 });
    }
    
    // For SPA routing, return the index.html for all non-API routes
    // This allows client-side routing to handle the routes
    if (!url.pathname.includes('.')) {
      return new Response(homepage, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }
    
    // Return 404 for unmatched static assets
    return new Response('Not Found', { status: 404 });
  },
});

