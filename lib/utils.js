export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncateText(text, length = 100) {
  if (text.length <= length) {
    return text;
  }

  return text.substring(0, length) + "...";
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function calculateExperience(startYear) {
  const currentYear = new Date().getFullYear();

  return currentYear - startYear;
}

export function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}