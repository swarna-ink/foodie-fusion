Practice Project: Health Food Home (Tailwind CSS)
===================================================

File Structure
--------------
index.html            -> The full HTML structure of the page
css/style.css          -> Extra custom styles: custom cursor, smooth scroll, scroll-reveal animation
js/tailwind.config.js  -> Tailwind's custom colors (primary, dark, cream) and font settings
js/script.js           -> Logic for the mobile menu, hero slider, custom cursor, and scroll-reveal animation

How to Run It
-------------
1. Unzip the file and open the folder in VS Code.
2. If you have the "Live Server" extension installed, right-click index.html
   and choose "Open with Live Server".
3. If you don't have Live Server, just double-click index.html and it will
   open directly in your browser — but Live Server is nice because it
   auto-refreshes whenever you save a change.

A Note on Tailwind
-------------------
This project uses the Tailwind CDN (Play CDN) version, so there's no need
for npm install or a build step — it works as soon as you open it in a
browser. On a real production project you'd normally install Tailwind
through npm instead (better performance), but for practice this CDN
version is simple and good enough.

Effects Included
-----------------
1. Custom Cursor — scroll down to the "Book a Table" section and move your
   mouse over it. Instead of the normal cursor, a round cursor with the
   text "BOOK" follows your mouse. Logic is in js/script.js under
   "3) Custom Cursor Effect", styling is in css/style.css under
   #custom-cursor.

2. Scroll Reveal Animation — as you scroll down the page, section titles
   and menu cards fade in and slide up into place instead of just
   appearing instantly. This uses the browser's IntersectionObserver API
   to detect when an element enters the viewport. Logic is in js/script.js
   under "4) Scroll Reveal Animation", styling is in css/style.css under
   .reveal-on-scroll.
