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
    
    // Return 404 for unmatched routes
    return new Response('Not Found', { status: 404 });
  },
});

