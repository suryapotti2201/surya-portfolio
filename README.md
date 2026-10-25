# Surya Potti | Developer Portfolio

Personal portfolio of **Surya Potti**, a **Java Full Stack Developer / Senior Software Engineer**, showcasing technical skills, professional experience, selected projects, education, and certification.

Built with HTML, CSS, Tailwind CSS, and vanilla JavaScript, this website brings my professional profile together in a responsive, interactive interface.

[GitHub Profile](https://github.com/suryapotti2201) · [LinkedIn](https://www.linkedin.com/in/suryapotti) · [Email](mailto:suryapotti2201@gmail.com)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Portfolio Sections](#portfolio-sections)
- [Files](#files)
- [Run Locally](#run-locally)
- [Test on an iPhone](#test-on-an-iphone)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

## Overview

This portfolio presents my work with Java, Spring Boot, REST APIs, microservices, messaging, caching, and modern frontend technologies. Visitors can explore my skills and project highlights, review my professional background, verify my AWS certification, and view or download my resume.

The repository contains a static portfolio website. The enterprise projects described on the page are professional work highlights; their application source code is not included here.

## Features

- **Responsive layouts:** Content adapts to desktop, tablet, and mobile screens.
- **Light and dark themes:** A theme toggle saves the selected preference in browser local storage.
- **Mobile navigation:** A hamburger menu expands navigation and closes after a section link is selected.
- **Interactive cards:** Skill and project cards reveal additional information on hover for pointer devices and on tap for touch devices.
- **Keyboard card controls:** Focus a card with Tab and press Enter or Space to toggle its details.
- **Animated hero text:** Rotates through developer roles; the typing effect is skipped when reduced motion is requested.
- **Animated hero statistics:** Numbers count up once per page load, preserving decimals and units. The animation respects reduced-motion preferences.
- **Glowing scroll progress:** A thin, glowing bar shows how much of the page has been scrolled, with colors adapted for light and dark themes.
- **Scroll interactions:** Section reveal animations, a scroll progress bar, active navigation highlighting, and a back-to-top button.
- **Resume access:** Separate buttons to view the PDF in a new tab and download it.
- **Credential verification:** Direct link to the AWS credential on Credly.
- **Contact links:** Email, phone, LinkedIn, and GitHub access.
- **Automatic footer year:** JavaScript keeps the displayed year current.

## Technology Stack

| Technology | Role in this website |
|---|---|
| HTML5 | Page structure, navigation, and portfolio content |
| CSS3 | Custom layouts, themes, card effects, and animations |
| Tailwind CSS | Utility classes for spacing, layout, and responsive styling |
| Vanilla JavaScript | Menus, theme persistence, card interactions, and scroll behavior |
| Font Awesome | Interface and technology icons |
| GitHub Pages | Static hosting option |

The current website loads Tailwind CSS and Font Awesome from external CDNs, so an internet connection is needed for those resources. No npm installation, Java runtime, database, or backend server is required to run this portfolio.

## Portfolio Sections

| Section | What it contains |
|---|---|
| Home | A brief introduction, profile photo, rotating professional role text, and buttons to view or download the resume. |
| About | An overview of professional background, experience, and key profile information. |
| Skills | Interactive cards displaying technical skills grouped by area of expertise. |
| Experience | A summary of professional roles, responsibilities, and contributions. |
| Projects | Selected work with descriptions, technologies used, and engineering highlights. |
| Certification | Professional credential details, validity dates, and a verification link. |
| Education | Academic qualifications, study location, and attendance dates. |
| Contact | Links for connecting through email, phone, and professional profiles. |

## Files

The website uses `index.html` as its main page and is ready to be served from the repository root.

| File | Purpose |
|---|---|
| `index.html` | Main page and portfolio content |
| `css/style.css` | Custom styles, responsive rules, and theme definitions |
| `js/script.js` | Interactive behavior |
| `resources/images/profile.jpg` | Profile photograph |
| `resources/documents/surya-resume.pdf` | Resume used by the view and download buttons |
| `README.md` | Repository documentation |

Keep `index.html` and `README.md` at the repository root, with styles in `css/`, scripts in `js/`, and assets in the corresponding `resources/` subfolders. Preserve exact paths and filename capitalization when updating HTML references.

## Run Locally

1. Download and extract the repository ZIP, or clone your repository using its URL from GitHub's **Code** menu.
2. Open Terminal in the `surya-portfolio` root folder containing `index.html`.
3. If Python 3 is installed, start a local server:

   ```bash
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

4. Open `http://localhost:8000/` in your browser.

5. Keep Terminal running while previewing. Press **Ctrl+C** to stop the server.

Alternatively, open the project in Visual Studio Code and use the Live Server extension.

## Test on an iPhone

Use Safari to open a served webpage. Opening an HTML file in the iPhone Files preview may not load its associated CSS and JavaScript correctly.

1. Connect the Mac and iPhone to the same Wi-Fi network.
2. From the portfolio folder on the Mac, run:

   ```bash
   python3 -m http.server 8000 --bind 0.0.0.0
   ```

3. Find the Mac's Wi-Fi IP address in **System Settings → Wi-Fi → Details → TCP/IP**.
4. On the iPhone, open Safari and enter `http://MAC-IP:8000/`, replacing `MAC-IP` with the actual address.
5. Keep the Mac awake and the server running. If necessary, allow the server's incoming connection through the Mac firewall.

Tap a skill or project card to show its details, then tap it again to return to the front. You can also test directly using the published GitHub Pages URL.

## Deploy to GitHub Pages

### Prepare the repository

1. Create a public repository on GitHub, for example `surya-portfolio`.
2. Confirm **`index.html`** is in the main project folder.
3. Upload the extracted website files and folders, rather than the ZIP archive.
4. Ensure `index.html` and `README.md` appear at the repository root alongside the `css/`, `js/`, and `resources/` folders. Preserve their subfolder structure.
5. Commit the uploaded files to `main`.

In `index.html`, use these relative paths for the organized folders:

```html
<link rel="stylesheet" href="./css/style.css">
<script src="./js/script.js" defer></script>
<img src="./resources/images/profile.jpg" alt="Surya Potti">
<a href="./resources/documents/surya-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
<a href="./resources/documents/surya-resume.pdf" download>Download Resume</a>
```

### Enable publishing

Open **Repository → Settings → Pages** and configure:

| Setting | Value |
|---|---|
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/ (root)` |

Click **Save**, then wait for deployment to finish. Check the **Actions** tab if a deployment fails. The published address appears under **Settings → Pages**.

For username `suryapotti2201` and repository `surya-portfolio`, the expected address after successful deployment is:

**https://suryapotti2201.github.io/surya-portfolio/**

This address assumes that exact repository name; update it if you choose another name. Deployment is not confirmed by this README.

### Publish updates

Edit the relevant files, upload or push the changes to `main`, and commit them. GitHub Pages will run another deployment from the configured publishing branch.

Reference: [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Customization

| Change | Where to edit |
|---|---|
| Name, introduction, experience, and education | Main HTML file |
| Skills and project descriptions | Skill and project card markup in the HTML |
| Colors, spacing, and card appearance | `css/style.css` |
| Rotating hero roles | `roles` array in `js/script.js` |
| Profile photo | Replace `resources/images/profile.jpg`, or update the image path |
| Resume | Replace `resources/documents/surya-resume.pdf`, or update both resume links |
| Certification | Credential text and verification link in the HTML |
| Social and contact links | Contact section and footer in the HTML |

The theme preference uses the local storage key `portfolio-theme`. Clear that key in browser developer tools when testing the default theme.

When updating GitHub links, use the same intended profile in both the contact section and footer. The source package currently has different GitHub usernames in those two locations.

## Troubleshooting

| Problem | What to check |
|---|---|
| GitHub Pages shows a 404 | Confirm `index.html` is in the configured publishing folder and deployment succeeded. |
| CSS or JavaScript does not load | Check exact filenames, relative paths, and that all files were uploaded. |
| Icons or Tailwind styling are missing | Check internet access and whether CDN requests are blocked or failing. |
| Images or resume links fail | Confirm the assets exist and their paths match, including letter case. |
| iPhone file preview looks unstyled | Open the hosted URL in Safari or use the Mac's local server. |
| iPhone cannot reach the local server | Check Wi-Fi, Mac IP address, firewall, server binding, and whether the Mac is awake. |
| Recent edits do not appear | Wait for deployment, refresh the page, or test in a private browsing tab. |
| Cards or buttons do not respond | Confirm `js/script.js` loads and inspect the browser console for errors. |

## Contact

**Surya Potti** — Java Full Stack Developer / Senior Software Engineer

- GitHub: [suryapotti2201](https://github.com/suryapotti2201)
- LinkedIn: [Surya Potti](https://www.linkedin.com/in/suryapotti)
- Email: [suryapotti2201@gmail.com](mailto:suryapotti2201@gmail.com)

## License

The supplied portfolio package does not include a `LICENSE` file. No open-source license is declared by this README. If reuse is intended, add an appropriate license and clarify the treatment of personal photos, resume content, and third-party assets.
