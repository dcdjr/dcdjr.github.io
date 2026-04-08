const storageKey = "theme";
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const readStoredTheme = () => {
    try {
        return localStorage.getItem(storageKey);
    } catch (error) {
        return null;
    }
};

const writeStoredTheme = (theme) => {
    try {
        localStorage.setItem(storageKey, theme);
    } catch (error) {
        return;
    }
};

const getPreferredTheme = () => readStoredTheme() || (systemTheme.matches ? "dark" : "light");

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);

    if (themeMeta) {
        themeMeta.setAttribute("content", theme === "dark" ? "#07111d" : "#f4efe8");
    }
};

applyTheme(getPreferredTheme());

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("themeIcon");
    const yearTargets = document.querySelectorAll("[data-current-year]");

    const syncThemeControl = (theme) => {
        if (!toggleButton || !icon) return;

        const isDark = theme === "dark";
        icon.className = `bi ${isDark ? "bi-sun" : "bi-moon-stars"}`;
        toggleButton.setAttribute("aria-pressed", String(isDark));
        toggleButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
        toggleButton.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    };

    yearTargets.forEach((node) => {
        node.textContent = String(new Date().getFullYear());
    });

    syncThemeControl(document.documentElement.getAttribute("data-bs-theme") || getPreferredTheme());

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";

            applyTheme(nextTheme);
            writeStoredTheme(nextTheme);
            syncThemeControl(nextTheme);
        });
    }

    systemTheme.addEventListener("change", (event) => {
        if (readStoredTheme()) return;

        const nextTheme = event.matches ? "dark" : "light";
        applyTheme(nextTheme);
        syncThemeControl(nextTheme);
    });

    requestAnimationFrame(() => {
        document.body.classList.add("page-ready");
    });
});
