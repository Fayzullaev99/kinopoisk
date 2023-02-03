// вверх страницы
export const navigateToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// вниз страницы
export const navigateToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
};
