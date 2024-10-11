# Declutter your feed

## Background
I was frustrated with my LinkedIn feed being filled with irrelevant and low-quality "suggested" and "promoted" posts, so I decided to find a way to get rid of them and share the guide with others.

## What do you need?
**Be cautious! This method involves executing custom JavaScript code in your web browser, which may present security risks. Always validate the content of the scripts before you use them in your browser.**

By running JavaScript in a web browser, you can easily modify the website's structure (Document Object Model) and hide elements you don't want to see. You can do pretty much anything.

To run JavaScript code in your browser, you can use an extension such as [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or a standalone application. If you use Chrome or any other chromium-based browser, you will find more extensions that allow you to achieve the same. For Safari, the options are limited.

On MacOS and Safari, I've found [Sprinkles](https://getsprinkles.app) to work great while being free. Sprinkles runs a tiny webserver on your machine. When you visit a website, the browser extension asks this server for scripts and executes them. Check their website to learn more.

## How to get started?

1. Install a tool that allows you to run JavaScript in your browser.
    - I'm using [Sprinkles](https://getsprinkles.app) for MacOS and Safari.

2. Copy the `linkedin.com.js` file into a directory where your tool expects to find scripts.

3. Reload the website and enjoy your clutter-free feed.