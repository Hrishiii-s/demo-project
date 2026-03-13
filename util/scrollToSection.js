export const scrollToSection = id => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 100;
  const start = window.scrollY;

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;

  const end = elementPosition - headerOffset;

  const duration = 300;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;

    const progress = currentTime - startTime;
    const percent = Math.min(progress / duration, 1);

    window.scrollTo(0, start + (end - start) * percent);

    if (progress < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};
