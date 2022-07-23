import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"];
export const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
export const plugins = [require("@tailwindcss/typography")];
