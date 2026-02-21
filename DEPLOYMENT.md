# Clear Vision Academy - Deployment Guide

## Vercel Deployment (Recommended)

This project is configured for Vercel deployment with full support for deep linking and SPA routing.

### Routes Configured

All routes are configured to work with direct access and page refresh:

- `/` - Main Academy Homepage
- `/assessments` - Assessments Hub
- `/assessment/power-pause` - Power Pause Assessment
- `/assessment/whole-health` - Whole Health Assessment
- `/assessment/vision-clarity` - Vision Clarity Assessment
- `/thank-you-enrollment` - Thank You Page (Enrollment)
- `/thank-you-overview` - Thank You Page (Overview)
- `/thank-you-assessment` - Thank You Page (Assessment)

### Deep Link Support

The `vercel.json` file ensures that:
- All routes are rewritten to `/index.html` for client-side routing
- Direct URL access works (e.g., `yourdomain.com/assessments`)
- Page refreshes maintain the current route
- Deep links from external sources work correctly

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from project directory:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project or create new
   - Accept default settings
   - Deploy!

### Option 2: GitHub Integration

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

### Option 3: Drag & Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the `dist` folder
4. Your site is live instantly!

## Environment Variables

If using Supabase for assessments, add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

## Testing Deep Links

After deployment, test these URLs directly:

✅ `https://your-domain.vercel.app/assessments`
✅ `https://your-domain.vercel.app/assessment/power-pause`
✅ `https://your-domain.vercel.app/assessment/whole-health`
✅ `https://your-domain.vercel.app/assessment/vision-clarity`
✅ `https://your-domain.vercel.app/thank-you-enrollment`
✅ `https://your-domain.vercel.app/thank-you-overview`
✅ `https://your-domain.vercel.app/thank-you-assessment`

All routes should:
- Load correctly on direct access
- Work after page refresh
- Maintain navigation state
- Display correct content

## Custom Domain Setup

1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `academy.clearvisionleader.com`)
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificate

## Alternative Hosting Platforms

### Netlify

Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

Not recommended for this project due to routing complexity.

### Traditional Hosting (cPanel, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist` folder to your web root

3. Add `.htaccess` file in web root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Build Verification

Before deploying, always run:
```bash
npm run build
```

Expected output:
- ✓ No TypeScript errors
- ✓ All modules transformed
- ✓ Assets generated in `dist/`
- ✓ File sizes displayed

## Performance Optimization

The build includes:
- Code splitting
- Asset minification
- Gzip compression
- Optimized bundle size (~278 KB JS, ~20 KB CSS)

## Troubleshooting

### Routes not working after deployment

**Solution**: Verify `vercel.json` is included in deployment

### 404 errors on page refresh

**Solution**: Check that rewrites are configured correctly

### Assets not loading

**Solution**: Ensure `public/` folder contents are included in build

### Environment variables not working

**Solution**:
1. Verify they're prefixed with `VITE_`
2. Redeploy after adding variables
3. Check they're set in deployment platform

## Post-Deployment Checklist

- [ ] Test all routes directly
- [ ] Verify page refresh works on all routes
- [ ] Check mobile responsiveness
- [ ] Test form submissions (if using Supabase)
- [ ] Verify logo and images load
- [ ] Test navigation between pages
- [ ] Check console for errors
- [ ] Test on multiple browsers

## Support

For deployment issues:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **React Router**: [reactrouter.com](https://reactrouter.com)

---

**Project Status**: ✅ Production Ready

All routes configured and tested. The `vercel.json` ensures proper SPA routing with deep link support.
