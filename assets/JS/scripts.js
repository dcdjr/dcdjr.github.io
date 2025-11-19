// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
document.documentElement.setAttribute("data-bs-theme", savedTheme || "light");

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("themeIcon");

    // Sync icon + button on load
    const isDark = savedTheme === "dark";
    icon.classList.toggle("bi-sun", isDark);
    icon.classList.toggle("bi-moon", !isDark);
    toggleButton.classList.toggle("btn-light", isDark);
    toggleButton.classList.toggle("btn-dark", !isDark);

    // Toggle theme on click
    toggleButton.addEventListener("click", () => {
        const darkMode = document.documentElement.getAttribute("data-bs-theme") === "dark";

        // Switch theme
        const newTheme = darkMode ? "light" : "dark";
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        // Update icon
        icon.classList.toggle("bi-sun", newTheme === "dark");
        icon.classList.toggle("bi-moon", newTheme === "light");

        // Update button color
        toggleButton.classList.toggle("btn-light", newTheme === "dark");
        toggleButton.classList.toggle("btn-dark", newTheme === "light");
    });
});
