export function setupNavScroll(navSelector: string, offset = 300): void {
  let lastScrollTop = window.scrollY;

  const nav = document.querySelector<HTMLElement>(navSelector);
  if (!nav) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop <= offset) {
      // At the absolute top of the page
      nav.classList.remove("move-down");
      nav.classList.add("move-up");
    } else if (scrollTop > lastScrollTop) {
      // Scrolling down
      nav.classList.remove("move-up");
      nav.classList.add("move-down");
    }

    lastScrollTop = scrollTop;
  });
}
