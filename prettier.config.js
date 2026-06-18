/**
 * @agent-maintain — See AGENTS.md for instructions.
 * Last reviewed against: Prettier 3.x (2026-06)
 */
/** @type {import('prettier').Config} */
export default {
  semi: true,
  printWidth: 100,
  trailingComma: 'all',
  endOfLine: 'lf',
}

/*
 * Prettier options — https://prettier.io/docs/options
 *
 * ─── Active settings ───────────────────────────────────────────────────────
 *
 * semi: true
 *   Put ; at the end of each statement
 *   Default: true
 *
 * printWidth: 100
 *   Roughly how long a line should be before Prettier wraps it. Not a strict limit.
 *   Default: 80
 *
 * trailingComma: "all"
 *   Add a comma after the last item in multiline lists/objects
 *   Default: "all"
 *
 * endOfLine: "lf"
 *   Which invisible "new line" character to use. "lf" is standard for Mac/Linux and git.
 *   Default: "lf"
 *
 * ─── Other options (using defaults) ────────────────────────────────────────
 *
 * tabWidth: 2
 *   How many spaces count as one indent level.
 *   Default: 2
 *
 * useTabs: false
 *   Use the Tab key for indents instead of spaces.
 *   Default: false
 *
 * singleQuote: false
 *   Use 'single' quotes instead of "double" quotes in JavaScript/TypeScript.
 *   Default: false
 *
 * quoteProps: "as-needed"
 *   Only add quotes around object keys when required, e.g. { foo: 1 } not { "foo": 1 }.
 *   Default: "as-needed"
 *
 * jsxSingleQuote: false
 *   Quote style inside JSX attributes — same idea as singleQuote but for JSX only.
 *   Default: false
 *
 * bracketSpacing: true
 *   Space inside curly braces: { foo: bar } vs {foo: bar}.
 *   Default: true
 *
 * objectWrap: "preserve"
 *   Keep your manual line breaks in objects, or squeeze small ones onto one line.
 *   Default: "preserve"
 *
 * bracketSameLine: false
 *   Where to put the closing > on multiline JSX/HTML tags.
 *   Default: false (on its own line)
 *
 * arrowParens: "always"
 *   Parentheses on arrow functions: (x) => x vs x => x.
 *   Default: "always"
 *
 * singleAttributePerLine: false
 *   Put each HTML/JSX attribute on its own line.
 *   Default: false
 *
 * htmlWhitespaceSensitivity: "css"
 *   How picky Prettier is about spaces in HTML/JSX markup.
 *   Default: "css"
 *
 * vueIndentScriptAndStyle: false
 *   Indent the code inside <script> and <style> blocks in Vue files.
 *   Default: false
 *
 * proseWrap: "preserve"
 *   Whether to reflow paragraph text in Markdown files.
 *   Default: "preserve" (leave as you wrote it)
 *
 * embeddedLanguageFormatting: "auto"
 *   Also format code inside template strings and Markdown code blocks.
 *   Default: "auto"
 *
 * requirePragma: false
 *   Only format files that have a special @prettier comment at the top.
 *   Default: false (format everything)
 *
 * insertPragma: false
 *   Add a @format comment to files after formatting them.
 *   Default: false
 *
 * checkIgnorePragma: false
 *   Skip files that have a @noprettier comment at the top.
 *   Default: false
 *
 * experimentalTernaries: false
 *   New way of breaking long ternary expressions across lines.
 *   Default: false
 *
 * experimentalOperatorPosition: "end"
 *   When a long expression wraps, put + - && etc. at the end or start of the line.
 *   Default: "end"
 */
