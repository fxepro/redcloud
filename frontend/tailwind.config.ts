import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // RED — primary brand (#dc2836)
        brand: {
          50: "#fdecee",
          100: "#fad2d6",
          200: "#f4a8b0",
          300: "#ed7883",
          400: "#e44e5c",
          500: "#dc2836",
          600: "#c41f2c",
          700: "#a11a25",
          800: "#851720",
          900: "#5f1219",
          950: "#3a0a0e",
        },
        // BLUE — light #a8dadc → medium #457b9d → dark navy #1d3557
        accent: {
          50: "#f2f8f9",
          100: "#dcedee",
          200: "#a8dadc",
          300: "#82c2c6",
          400: "#5d9bb5",
          500: "#457b9d",
          600: "#3c6a87",
          700: "#335570",
          800: "#284259",
          900: "#1d3557",
          950: "#142540",
        },
        // Deep navy for dark sections (#1d3557)
        navy: {
          800: "#284259",
          900: "#1d3557",
          950: "#142540",
        },
        // Cool neutrals (slate) — the "white/grey" structure
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Backgrounds: white + light-blue tints (token names kept stable)
        cream: "#ffffff",
        sand: {
          100: "#f2f8f9",
          200: "#e2eff0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      // Type scale — content sizes 32→16 (16px is the hard floor).
      // 5xl–7xl are display sizes (hero) above the content scale.
      fontSize: {
        xs: ["1rem", { lineHeight: "1.5rem" }], //   16  (floor — labels, pills, meta)
        sm: ["1rem", { lineHeight: "1.5rem" }], //   16  (floor — small body)
        base: ["1rem", { lineHeight: "1.65rem" }], //  16  body
        lg: ["1.125rem", { lineHeight: "1.7rem" }], //  18  H5 / lead / card titles
        xl: ["1.5rem", { lineHeight: "2rem" }], //      24  (interpolation step)
        "2xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28  H4
        "3xl": ["2rem", { lineHeight: "2.4rem" }], //   32  H3
        "4xl": ["2.25rem", { lineHeight: "2.6rem" }], // 36  H2
        "5xl": ["3rem", { lineHeight: "3.25rem" }], //   48  H1
        "6xl": ["3.375rem", { lineHeight: "3.55rem" }], // 54  (display step)
        "7xl": ["3.75rem", { lineHeight: "3.85rem" }], // 60  Title (display max)
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 8px 28px -8px rgba(15, 23, 42, 0.12)",
        lift: "0 12px 40px -12px rgba(15, 23, 42, 0.22)",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1350px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
