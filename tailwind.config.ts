import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '600',
            },
            h4: {
              fontSize: '1.25rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
            },
            h5: {
              fontSize: '1.125rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
            },
            h6: {
              fontSize: '1rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config; 