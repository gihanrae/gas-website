# GAS // Tactical FPS Shooter — Website Guide

Welcome to the official static pitch website for **GAS**! This site is designed specifically for pitching to publishers and hosting directly on **GitHub Pages** with zero setup or build steps required.

---

## 📁 Project Structure

```text
GASWebsite/
├── index.html           # Main single-page scroll website (All sections)
├── style.css            # Dark tactical mil-sim stylesheet (Colors, layout, responsiveness)
├── main.js              # Interactive features (Weapon filtering, lightbox zoom, mobile menu)
├── README.md            # Customization & GitHub Pages guide
└── assets/              # Cleaned game assets
    ├── coverart.png     # Main cover artwork (Hero background & preview)
    ├── gamemode.png     # Game mode visual showcase render
    ├── icon.png         # Website favicon & badge icon
    ├── map-overivew.png # Top overview of Military Island map
    ├── renders/         # Background renders (camp, camp-close, forest, grass-field, hill-top, etc.)
    ├── Weapons/         # AKM, M16, MK18, MP5, UMP, Vector, Shotgun, Win95, Hunter, Revolver
    ├── Attachments/     # Sights (Reflex, Holo, 2x, 4x, 6x, 8x), Grips, Muzzles
    ├── Ammo/            # AR, SMG, Shotgun, Sniper magazines
    └── Utilities/       # Bandages, Grenades
```

---

## 🛠️ How to Customize Your Website

### 1. Changing Section Titles & Descriptions
Open `index.html` in any code editor (Notepad, VS Code, etc.).
Each section is labeled with clear comments:
```html
<div class="section-header">
  <span class="section-tag">0X // CATEGORY</span>
  <h2 class="section-title">YOUR TITLE HERE</h2>
  <p class="section-desc">Your description text here...</p>
</div>
```
Simply edit the text between the tags!

---

### 2. Changing Section Background Images
Each section uses an inline CSS variable `--section-bg` right on the `<section>` tag.
To change the background image, simply replace the file path inside `url(...)`:

```html
<!-- Example: Changing Section 2 Background -->
<section id="gamemode" class="game-section" style="--section-bg: url('assets/renders/camp.png');">
```
You can put any image inside the `assets/` or `assets/renders/` folder and reference it like `assets/renders/your_image.png`.

---

### 3. Adding a New Section (e.g., 2nd Map, Vehicles, Lore)
To add a new section, copy and paste this template block anywhere before `<section id="contact">` in `index.html`:

```html
<!-- =========================================================================
     NEW SECTION TEMPLATE
     ========================================================================= -->
<section id="map2" class="game-section" style="--section-bg: url('assets/coverart.png');">
  <div class="container">

    <div class="section-header">
      <span class="section-tag">08 // NEW THEATER</span>
      <h2 class="section-title">MAP 2: INDUSTRIAL HARBOR</h2>
      <p class="section-desc">
        A multi-tier industrial port featuring crane sniper perches and shipping container CQB mazes.
      </p>
    </div>

    <div class="tactical-box" style="background: var(--bg-card); padding: 32px; border: 1px solid var(--border-subtle);">
      <!-- Put your text, image, or cards here -->
      <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.7;">
        Description of your new feature, map, or mechanics goes here.
      </p>
    </div>

  </div>
</section>
```

#### Adding the new section to the Top Navigation Bar:
In `index.html`, inside `<ul class="nav-menu">`, add a new menu item:
```html
<li><a href="#map2" class="nav-link">Map 2</a></li>
```

---

### 4. Updating Your Contact Details, Portfolio & Video Links
- **Portfolio Link**: Linked in the Navbar, Hero badge, Section 8, and Footer (`https://gihanrae.github.io/portfolio/`).
- **Playtest & Devlog Videos**: Embedded directly in Section 2 with quick-launch CTA buttons in the Hero (`https://youtu.be/M_VutAHuCao` and `https://youtu.be/iciWA1KqCKI`).
- **Direct Email**: Configured to `gihanrae@gmail.com`.
- **Discord Community**: Configured to `https://discord.gg/Fn6Yc2QKSM`.

---

### 5. Customizing Colors & Theme
Open `style.css`. The top of the file contains the `:root` variables:
```css
:root {
  --accent-amber: #f59e0b;      /* Primary tactical highlight color */
  --accent-olive: #5e8254;      /* Military camouflage accent */
  --bg-primary: #080b10;        /* Deep dark background */
  --text-bright: #ffffff;       /* Title text color */
}
```
Changing any of these values updates the entire website instantly!

---

## 🚀 How to Host on GitHub Pages (Free)

Hosting this site on GitHub Pages takes less than 3 minutes:

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **New Repository**.
   - Name it `GAS` or `GASWebsite`.
   - Set it to **Public**.
   - Click **Create repository**.

2. **Upload Your Files**:
   - Upload all files (`index.html`, `style.css`, `main.js`, `README.md`, and the `assets/` folder) directly to the repository (via Git or GitHub web uploader).

3. **Enable GitHub Pages**:
   - In your repository, click **Settings** (top right tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** &rarr; **Branch**:
     - Select `main` (or `master`).
     - Select folder `/ (root)`.
     - Click **Save**.

4. **Done!**
   - In 1–2 minutes, GitHub will provide your live URL:
   - `https://yourusername.github.io/GASWebsite/`
   - You can send this link directly to publishers, investors, or link it in your pitch decks!

