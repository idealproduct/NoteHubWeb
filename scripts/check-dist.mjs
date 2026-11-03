import { readdir, readFile } from 'node:fs/promises'
import { resolve, relative, sep } from 'node:path'

// Explicitly approve new public assets here. Everything in dist is public.
const allowed = [
  /^index\.html$/,
  /^favicon\.svg$/,
  /^icons\.svg$/,
  /^CNAME$/,
  /^\.nojekyll$/,
  /^images\/app-phase2\.png$/,
  /^assets\/[\w-]+\.(?:js|css)$/,
]
const credentialPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{20,})\b/,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  /\bAIza[A-Za-z0-9_-]{35}\b/,
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{32,}\b/,
]
const root = resolve('dist')
const problems = []
let count = 0
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name)
    const name = relative(root, path).split(sep).join('/')
    if (entry.isSymbolicLink()) { problems.push(`Symbolic link: ${name}`); continue }
    if (entry.isDirectory()) { await walk(path); continue }
    count++
    if (!allowed.some(pattern => pattern.test(name))) problems.push(`Unapproved public file: ${name}`)
    if (/\.(?:html|js|css|svg|json|txt)$/i.test(name)) {
      const content = await readFile(path, 'utf8')
      if (credentialPatterns.some(pattern => pattern.test(content))) problems.push(`Possible credential in: ${name}`)
      if (/sourceMappingURL\s*=/.test(content)) problems.push(`Source map reference in: ${name}`)
    }
  }
}
await walk(root)
const html = (await readFile(resolve(root, 'index.html'), 'utf8')).replaceAll('&#39;', "'")
if (!html.includes('Content-Security-Policy') || !html.includes("connect-src 'none'")) problems.push('Missing production security policy')
if (problems.length) {
  console.error(problems.join('\n')) // Never print potential secret values.
  process.exitCode = 1
} else {
  console.log(`Publication check passed: ${count} approved files; no source maps or recognized credential patterns. This is not a guarantee that all secrets are absent.`)
}
