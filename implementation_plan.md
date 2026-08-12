# Al Barakh Organics — Website Content & Structure Overhaul

This plan covers a comprehensive update to align the existing Next.js + Payload CMS website with the provided content draft. The site currently has placeholder content, a generic "organic fertilizer shop" feel, and is missing several key pages and sections. The goal is to transform it into an **agricultural solutions platform** per the brand brief.

> [!IMPORTANT]
> The brand name in the codebase is "Al Barakah Organics" but the content draft uses "Al Barakh Organics". I'll use **"Al Barakh Organics"** as specified in the draft. Please confirm if this is correct.

## Open Questions

> [!IMPORTANT]
> **WhatsApp Number**: The current placeholder is `923000000000`. Please provide the real WhatsApp number to use across the site.

> [!IMPORTANT]
> **Social Media Links**: The footer currently has placeholder `#` links for Facebook, Instagram, WhatsApp. Please provide the real URLs for these platforms plus any others (YouTube, LinkedIn, etc.).

> [!IMPORTANT]
> **Contact Details**: Footer and Contact page have placeholders for address, phone, and email. Please provide the real information.

> [!NOTE]
> **Product Detail Page & Cart Flow**: The current site has an e-commerce cart/checkout flow. The new content draft positions the brand as an enquiry-driven solutions company (WhatsApp ordering, not online checkout). Should I **remove the cart/checkout system** and replace "Add to Cart" with "Order on WhatsApp" buttons, or keep the cart alongside WhatsApp?

---

## Proposed Changes

Changes are grouped by phase. Each phase can be executed and verified independently.

---

### Phase 1: Navigation & Global Layout Updates

#### [MODIFY] [Header.tsx](file:///d:/al-barakah-organics/src/components/Header.tsx)
- Update brand name from "Al Barakah" → "Al Barakh"
- Update navigation links to match the new sitemap:
  `Home | About Us | Products | Solutions | Training | Impact | Resources | Contact`
- Remove the Cart button from header (or keep if e-commerce stays — pending answer)

#### [MODIFY] [Footer.tsx](file:///d:/al-barakah-organics/src/components/Footer.tsx)
- Update brand name to "Al Barakh Organics"
- Update tagline from "Nurturing the soil, naturally" → brand message from draft
- Update Quick Links to match new navigation structure (add Solutions, Impact, Resources)
- Update footer large text from "Nurture the Soil" to the new brand statement
- Add social media links section with proper link placeholders
- Update contact details placeholders

#### [MODIFY] [WhatsAppButton.tsx](file:///d:/al-barakah-organics/src/components/WhatsAppButton.tsx)
- Replace emoji `💬` with a proper WhatsApp SVG icon for professional look
- Add a subtle pulse animation to draw attention
- Add hover tooltip "Chat on WhatsApp"

#### [MODIFY] [layout.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/layout.tsx)
- Update metadata title to "Al Barakh Organics | Organic Agriculture Solutions for Pakistan"
- Update meta description to match SEO keywords from the draft

---

### Phase 2: Home Page — Complete Content Overhaul

#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/page.tsx)

**Hero Section** — Replace current content:
- Headline: "Organic Agriculture Solutions for a Healthier Soil and Better Future"
- Subheadline: "Vermicompost, Red Wigglers, Farmer Training and Practical Solutions for Sustainable Agriculture."
- Primary CTA: "Get Organic Solutions" → `/products`
- Secondary CTA: "Talk to Us on WhatsApp" → WhatsApp link
- Keep the hero background image approach

**New: Credibility Stats Section** — Add animated counter section:
- 400+ Acres | 10,000+ Bags | 100+ Trainings | Pakistan-wide Reach

**About Al Barakh Section** — Replace "Who We Are" teaser with the full about blurb from the draft

**Our Products and Solutions Section** — Replace generic products grid with 4 solution cards:
- Vermicompost, Red Wigglers, Training & Capacity Building, Sustainable Agriculture Solutions

**New: "From Our Farms to Farmers" Section** — Field experience narrative with stats

**New: "Why Al Barakh" Section** — Replace "Why Organic Farming?" with the 5-point value proposition:
- Field Tested, Farmer Focused, Training Driven, Sustainable Approach, Growing Solutions

**Impact Section** — Add impact stats with visual impact  

**Testimonials** — Keep existing testimonial carousel, update heading to "Farmer Stories"

#### [NEW] [CountUpStats.tsx](file:///d:/al-barakah-organics/src/components/CountUpStats.tsx)
- Animated counter component for credibility statistics
- Uses Intersection Observer to trigger count-up animation on scroll

---

### Phase 3: About Us Page — Complete Rewrite

#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/about/page.tsx)

Replace all placeholder content with the real content from the draft:
- **Intro**: Al Barakh Organics establishment story and objective
- **Who We Serve**: List of customer segments (farmers, growers, nurseries, etc.)
- **Founder Section**: Mr. Sohaib Ahmed Khatti's story and photo placeholder
- **Our Approach**: Practical solutions company philosophy
- **Vision & Mission**: Replace placeholder text with actual vision from draft
- **Values**: Update to match "Field Tested, Farmer Focused, Training Driven, Sustainable Approach"

---

### Phase 4: Products Page Updates

#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/products/page.tsx)
- Update intro text to match the brand's positioning
- Add "WhatsApp Enquiry" button alongside "View Product"
- Add a **Future Products** section at the bottom:
  - Coming Soon: Vermiwash
  - Coming Soon: Biochar
  - Future organic agricultural inputs

#### [MODIFY] [ProductSpotlight.tsx](file:///d:/al-barakah-organics/src/components/ProductSpotlight.tsx)
- Add "Order on WhatsApp" button alongside "Add to Cart"
- Update card copy style

---

### Phase 5: New Pages — Solutions, Impact, Resources

#### [NEW] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/solutions/page.tsx)
**Sustainable Agriculture Solutions** page covering:
- Organic fertilizer solutions
- Vermicomposting solutions
- Organic waste management
- Soil health improvement
- Farm-level organic input guidance
- Nursery and horticulture solutions
- Customized B2B and institutional solutions
- CTA: "Discuss Your Requirement" → WhatsApp

#### [NEW] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/impact/page.tsx)
**Impact** page with:
- Stats section (400+ Acres, 10,000+ Bags, 100+ Trainings, Pakistan-wide Reach)
- Farmer Stories section with case study placeholders
- Photo collage placeholder area

#### [MODIFY] Blog → Resources rename
#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/blog/page.tsx)
- Rename "Blog & Educational Resources" → "Knowledge Centre / Resources"
- Add article topic list from the draft:
  - What is Vermicompost?
  - Benefits and practical uses
  - Vermicompost vs conventional compost
  - How to use in mango orchards
  - How to start vermicomposting
  - Red Wigglers and their role
  - Soil health and organic inputs
  - Organic farming practices
  - Practical sustainable agriculture solutions

---

### Phase 6: Training Page Updates

#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/training/page.tsx)
- Update intro text to match draft content (capacity building emphasis)
- Add training topics list (vermicomposting, soil health, organic fertilizer production, etc.)
- Add "100+ trainings conducted" stat
- Update CTA to "Request a Training" → WhatsApp link
- Add **Who We Serve** sub-section for training audiences

---

### Phase 7: Contact Page Updates

#### [MODIFY] [page.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/contact/page.tsx)
- Update intro text to match draft ("Talk to Al Barakh" heading)
- Add customer type descriptions (farmer, nursery, institution, business)
- Prominent WhatsApp CTA
- Add "Social media links will be added" note/placeholders

---

### Phase 8: SEO & Metadata

#### [MODIFY] [layout.tsx](file:///d:/al-barakah-organics/src/app/(frontend)/layout.tsx)
- Add comprehensive meta tags for SEO
- Keywords: vermicompost, organic fertilizer, red wigglers, sustainable agriculture Pakistan

Add page-specific metadata exports to each page:
- About, Products, Solutions, Training, Impact, Resources, Contact

---

## Verification Plan

### Manual Verification
1. Run `npm run dev` and visually verify each page
2. Check mobile responsiveness on all pages
3. Verify WhatsApp button is visible on every page
4. Verify all navigation links work correctly
5. Verify all CTA buttons have correct hrefs
6. Check that the website reads as an "agricultural solutions platform" not a "fertilizer catalogue"

### Automated Tests
- Existing Playwright/Vitest tests should still pass
- Run `npm run build` to verify no TypeScript/build errors
