# WordPress Integration Guide

## Clear Vision Academy - Adding React Pages to WordPress

This guide explains how to integrate the React-based academy pages and assessments into your existing WordPress website.

---

## Option 1: Embedded iFrame (Easiest)

### Step 1: Deploy Your React App

1. Build your React application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to a hosting service:
   - **Netlify** (Recommended): Drag and drop the `dist` folder
   - **Vercel**: Connect your repository
   - **GitHub Pages**: Push to a gh-pages branch
   - **Your existing host**: Upload via FTP to a subdomain (e.g., academy.yourdomain.com)

### Step 2: Create WordPress Pages

For each page/assessment, create a new WordPress page:

1. Go to **Pages → Add New** in WordPress
2. Add a title (e.g., "Vision Clarity Assessment")
3. Add a **Custom HTML block** with this code:

```html
<iframe
  src="https://your-deployed-url.com/vision-clarity-assessment"
  style="width: 100%; height: 100vh; border: none;"
  title="Vision Clarity Assessment">
</iframe>

<script>
  // Auto-resize iframe based on content
  window.addEventListener('message', function(e) {
    if (e.data.height) {
      document.querySelector('iframe').style.height = e.data.height + 'px';
    }
  });
</script>
```

### Pages to Create:

1. **Academy Hub**: `/assessments-hub`
2. **Vision Clarity Assessment**: `/vision-clarity-assessment`
3. **Whole Health Assessment**: `/whole-health-assessment`
4. **Power Pause Assessment**: `/power-pause-assessment`
5. **Thank You - Assessment**: `/thank-you-assessment`
6. **Thank You - Enrollment**: `/thank-you-enrollment`
7. **Thank You - Overview**: `/thank-you-overview`

---

## Option 2: WordPress Plugin Integration (Advanced)

### Step 1: Install WP React Plugin

1. Install the **WP React** or **WP React Starter** plugin
2. Or use **Shortcode Ultimate** to create custom shortcodes

### Step 2: Create Custom Shortcodes

Add this to your theme's `functions.php`:

```php
<?php
// Add React app shortcode
function clear_vision_academy_shortcode($atts) {
    $atts = shortcode_atts(array(
        'page' => 'hub'
    ), $atts);

    $base_url = 'https://your-deployed-url.com';
    $page_url = $base_url . '/' . $atts['page'];

    return '<div id="react-app-container">
        <iframe src="' . esc_url($page_url) . '"
                style="width: 100%; min-height: 800px; border: none;"
                title="Clear Vision Academy">
        </iframe>
    </div>';
}
add_shortcode('academy_page', 'clear_vision_academy_shortcode');
?>
```

### Step 3: Use Shortcodes in Pages

Create WordPress pages and add shortcodes:

```
[academy_page page="assessments-hub"]
[academy_page page="vision-clarity-assessment"]
[academy_page page="whole-health-assessment"]
[academy_page page="power-pause-assessment"]
```

---

## Option 3: Direct WordPress Integration (Most Complex)

### Step 1: Install Node in WordPress

1. Use **WP Node** or **Headless WordPress** approach
2. This requires server access and Node.js support

### Step 2: Convert to WordPress Theme

1. Create a custom WordPress theme with React
2. Use **wp-scripts** or **@wordpress/scripts**
3. Enqueue React build files in WordPress

This approach is recommended only if you have WordPress development experience.

---

## Recommended Setup for Your Site

### Main Academy Page
- **WordPress Page**: "Academy" or "Leadership Academy"
- **URL**: `yourdomain.com/academy`
- **Content**: Use the main `App.tsx` (academy homepage)

### Assessment Pages
Create separate WordPress pages for each assessment:

1. **Vision Clarity Assessment**
   - URL: `yourdomain.com/vision-clarity-assessment`
   - File: `VisionClarityAssessment.tsx`

2. **Whole Health Assessment**
   - URL: `yourdomain.com/whole-health-assessment`
   - File: `WholeHealthAssessment.tsx`

3. **Power Pause Assessment**
   - URL: `yourdomain.com/power-pause-assessment`
   - File: `PowerPauseAssessment.tsx`

4. **Assessments Hub** (overview page)
   - URL: `yourdomain.com/assessments`
   - File: `AssessmentsHub.tsx`

### Thank You Pages
1. **Thank You - Assessment**: `/thank-you-assessment`
2. **Thank You - Enrollment**: `/thank-you-enrollment`
3. **Thank You - Overview**: `/thank-you-overview`

---

## Navigation Integration

### Option A: WordPress Menu Integration

1. Go to **Appearance → Menus** in WordPress
2. Add custom links to your React pages:
   - Label: "Academy"
   - URL: `https://your-deployed-url.com`

   Or if using iframes:
   - URL: `https://yourdomain.com/academy`

### Option B: Direct Links from Main Site

Update your main website's navigation to include:
```html
<a href="https://academy.yourdomain.com">Academy</a>
```

---

## Styling Considerations

### Match WordPress Theme

To make the React pages match your WordPress site:

1. **Extract WordPress CSS Variables:**
   - Copy your theme's colors, fonts, and spacing
   - Update `tailwind.config.js` to match

2. **Update Colors in React:**
   ```javascript
   // In tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           'wp-primary': '#your-color',
           'wp-secondary': '#your-color'
         }
       }
     }
   }
   ```

3. **Font Matching:**
   - Identify WordPress font family
   - Add to React app via Google Fonts or font files

---

## Database Integration

Since your assessments need to store responses:

### Option 1: Use Supabase (Already Set Up)
- The current setup uses Supabase
- No WordPress database needed
- Keep assessment data separate

### Option 2: WordPress REST API
If you want to store data in WordPress:

```javascript
// In your React component
const submitToWordPress = async (data) => {
  const response = await fetch('https://yourdomain.com/wp-json/wp/v2/submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
```

**Note:** This requires creating a custom WordPress endpoint.

---

## Step-by-Step Quick Start

### For Non-Technical Setup (Recommended):

1. **Deploy React App:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop your `dist` folder (after running `npm run build`)
   - Get your site URL (e.g., `https://clear-vision-academy.netlify.app`)

2. **Create WordPress Pages:**
   - Create 7 new pages (one for each React page)
   - Use the iframe code above
   - Replace `your-deployed-url.com` with your Netlify URL

3. **Update WordPress Menu:**
   - Add pages to your site navigation
   - Test each page

4. **Done!**

### For Technical Setup:

1. Deploy to a subdomain (academy.yourdomain.com)
2. Configure DNS records
3. Use WordPress redirect rules
4. Implement authentication if needed

---

## Environment Variables

Don't forget to add your environment variables to the deployment platform:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-key
```

These are needed for the assessments to store data.

---

## Troubleshooting

### Issue: iFrame not loading
- **Solution**: Check CORS settings on your React deployment
- Add `X-Frame-Options: ALLOWALL` header

### Issue: Styles look different
- **Solution**: Make sure React app uses consistent colors/fonts
- Extract WordPress CSS and apply to React

### Issue: Navigation not working
- **Solution**: Use WordPress permalinks or update React Router to work with WordPress

### Issue: Database not connecting
- **Solution**: Verify Supabase environment variables are set on your hosting platform

---

## Support

For questions about:
- **WordPress setup**: Contact your WordPress developer
- **React deployment**: Check hosting provider documentation
- **Code modifications**: Refer to React and Vite documentation

---

## File Structure Reference

```
project/
├── src/
│   ├── App.tsx                          → Main Academy Page
│   ├── pages/
│   │   ├── AssessmentsHub.tsx          → Assessment Overview
│   │   ├── VisionClarityAssessment.tsx → Assessment 1
│   │   ├── WholeHealthAssessment.tsx   → Assessment 2
│   │   ├── PowerPauseAssessment.tsx    → Assessment 3
│   │   ├── ThankYouAssessment.tsx      → Thank You Page
│   │   ├── ThankYouEnrollment.tsx      → Thank You Page
│   │   └── ThankYouOverview.tsx        → Thank You Page
├── dist/                                → Built files (deploy this)
└── .env                                 → Environment variables
```

---

## Next Steps

1. Choose your integration method (iframe recommended)
2. Deploy your React application
3. Create WordPress pages
4. Test all links and forms
5. Configure Supabase for form submissions
6. Launch!
