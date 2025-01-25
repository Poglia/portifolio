import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "off", 
        {
          "argsIgnorePattern": "^_", // Ignora variáveis que começam com "_"
          "varsIgnorePattern": "^_", // Ignora variáveis globais que começam com "_"
        },
      ],
    },
  },
];


export default eslintConfig;
