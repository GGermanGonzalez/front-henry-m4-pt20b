import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F7F7F8",
        secondary:"#000",
        tertiary:"#409c09",
        quaternary:"#5ab524",
        quinary:"#75ce40",

      }
      },
    },
  
  plugins: [],
};
export default config;
