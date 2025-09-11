export const scrollToSection = (id: string, event?: React.MouseEvent) => {
  if (event) event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
