import { defineFlatConfig } from "eslint-define-config"
import eslintConfigPrettier from "eslint-config-prettier"
import { FlatCompat } from "@eslint/eslintrc"
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname })

export default defineFlatConfig([
  { ignores: ["node_modules", "dist"] },
  ...compat.config({
    extends: ["plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
  }),
  eslintConfigPrettier,
])
