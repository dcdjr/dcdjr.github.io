// CHANGE: Respect persisted preference with a safe fallback to system preference for better first-load UX.
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-bs-theme", initialTheme);

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("themeIcon");

    // CHANGE: Guard clause prevents runtime errors if the toggle is missing on any future page.
    if (!toggleButton || !icon) return;

    const syncThemeControl = (theme) => {
        const isDark = theme === "dark";
        icon.classList.toggle("bi-sun", isDark);
        icon.classList.toggle("bi-moon", !isDark);
        toggleButton.classList.toggle("btn-light", isDark);
        toggleButton.classList.toggle("btn-dark", !isDark);
        // CHANGE: Update ARIA pressed state for assistive technology clarity.
        toggleButton.setAttribute("aria-pressed", String(isDark));
    };

    syncThemeControl(initialTheme);

    toggleButton.addEventListener("click", () => {
        const darkMode = document.documentElement.getAttribute("data-bs-theme") === "dark";
        const newTheme = darkMode ? "light" : "dark";

        document.documentElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        syncThemeControl(newTheme);
    });
});
