/**
 * Outer most element wrapping a post in the feed. In the case posts are not being deleted, verify this hasn't changed.
 */
const POST_SELECTOR =
  "#ember25 > " +
  "div.scaffold-layout.scaffold-layout--breakpoint-xl.scaffold-layout--sidebar-main-aside.scaffold-layout--reflow > " +
  "div > div > main > div.relative > div > div.scaffold-finite-scroll__content > div";

const BLACKLISTED = ["Suggested", "Promoted"];

function main() {
  // Start measuring execution time
  //   const _start = performance.now();

  const postWrapperElements = document.querySelectorAll(POST_SELECTOR);

  postWrapperElements.forEach((wrapper) => {
    const spanElements = wrapper.querySelectorAll("span");

    if (Array.from(spanElements).some((el) => BLACKLISTED.includes(el.innerText))) {
      wrapper.style.display = "none";
    }
  });

  // Output the execution time
  //   const _end = performance.now();
  //   console.log(`Execution time: ${_end - _start} milliseconds`);
}

// Run the function periodically to catch dynamically loaded content
setInterval(main, 3000);
