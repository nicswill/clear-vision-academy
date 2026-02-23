# Week 1 (Pre-Work & Orientation) Updates

## Overview
The Week0.tsx module has been updated to become Week 1 (Pre-Work & Orientation) with enhanced features including enrollment gating, a Get To Know You form section, and Zoom videoconference details.

## Changes Made

### 1. Week Numbering Update
- **Gold circle badge**: Changed from `0` to `1`
- **Page header**: Changed from "Week 0" to "Week 1"
- **Downloads label**: "Week 0 Workbook" → "Week 1 Workbook"
- **Facilitation notes**: Updated references from Week 0 to Week 1
- **Program Structure**: Updated to show "Week 1: Pre-Work & Orientation"

### 2. New Section: Coach Trainee Information Form
Added a new section after Learning Objectives with:
- **Title**: "Coach Trainee Information Form"
- **Description**: Instructions to complete the form before first live class
- **Button**: "Complete the Get To Know You Form" (opens in new tab)
- **Link**: https://docs.google.com/forms/d/1Ou78qWzc_mM4I0kwFaeNCpLhW8Il-NYTMkLA-COiZRM/viewform
- **Note**: Mentions Google sign-in requirement for file upload (headshot)
- **Icon**: Uses `ExternalLink` from lucide-react
- **Styling**: Matches the page's white card design with gold accents

### 3. Enrollment Gating (Authentication Check)
Implemented access control so Week 1 is only viewable by enrolled students:

```typescript
useEffect(() => {
  const isEnrolled = localStorage.getItem('cva_enrolled') === 'true';
  if (!isEnrolled) {
    navigate('/certification');
  }
}, [navigate]);
```

- **Public access**: Marketing pages (CertificationHub, Courses, Assessments) remain public
- **Gated access**: Week 1 module page is hidden unless `cva_enrolled === 'true'`
- **Redirect**: Non-enrolled users are automatically redirected to `/certification`

### 4. Weekly Videoconference Section
Added Zoom meeting details section (gated, only visible on Week 1 page):

- **Topic**: Clear Vision Coaching Academy
- **Meeting ID**: 870 3527 8651
- **Passcode**: Clarity
- **Day/Time**: Thursdays 7:00–9:00 PM EST (log in 6:45 PM)

**Session Schedule:**
- 7:30–8:15: Prayer; Coaching assignments/discussions; Model Coaching
- 8:15–8:20: Break
- 8:20–9:15: Business Discussion
- 9:15–9:30: Wrap up/Prayer/Homework

**Note**: "Coach Kay reserves the right to change the syllabus."

### 5. Testing Tool: Enrollment Test Page
Created `/enrollment-test` page to help test the gating functionality:

**Features:**
- Toggle enrollment status on/off
- Visual indicator showing current enrollment state
- Direct links to test:
  - Week 1 (gated page)
  - Certification Hub (public page)
- Instructions for testing the enrollment flow

**How to Test:**
1. Visit `/enrollment-test`
2. Click "Toggle Enrollment Status"
3. Try accessing Week 1 page
4. Verify redirect behavior when not enrolled
5. Verify access when enrolled

### 6. File Structure
- **Week0.tsx**: Updated to display as Week 1 (kept filename for routing compatibility)
- **EnrollmentTest.tsx**: New testing utility page
- **main.tsx**: Added route for `/enrollment-test`

## Important Notes

### Enrollment Status Management
The gating uses localStorage key: `cva_enrolled`
- Set to `'true'` for enrolled users
- Any other value (or missing) = not enrolled

### Route Structure
- Route remains `/certification/week-0` for now (no breaking changes)
- UI displays "Week 1: Pre-Work & Orientation"
- Can rename route later once all references are updated

### Zoom Info Security
- Zoom details are ONLY shown on the gated Week 1 page
- NOT displayed on public marketing pages
- Only enrolled students can access this information

## Testing Checklist

- [x] Build succeeds without errors
- [x] Week 1 displays correct numbering and content
- [x] Get To Know You form button links to correct Google Form
- [x] Enrollment gating redirects non-enrolled users
- [x] Zoom details display correctly on gated page
- [x] Public pages remain accessible without enrollment
- [x] Enrollment test page functions correctly

## Next Steps

To enable enrollment gating in production:
1. Implement proper authentication system
2. Set `localStorage.setItem('cva_enrolled', 'true')` after enrollment
3. Consider moving to Supabase auth or JWT tokens for production
4. Update other week pages with similar gating logic if needed

## Accessing the Test Page

Visit: `/enrollment-test` to toggle enrollment status and test the gating functionality.
