import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  base: './',
  plugins: [
    {
      name: 'utf8-readme-and-markdown',
      generateBundle() {
        const readmePath = path.resolve(__dirname, 'README.md');
        if (fs.existsSync(readmePath)) {
          this.emitFile({
            type: 'asset',
            fileName: 'README.md',
            source: fs.readFileSync(readmePath, 'utf-8'),
          });
        }
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url || '').split('?')[0].toLowerCase();

          // Handle /readme.md or /readme
          if (url === '/readme.md' || url === '/readme') {
            const readmePath = path.resolve(__dirname, 'README.md');
            if (fs.existsSync(readmePath)) {
              const content = fs.readFileSync(readmePath, 'utf-8');

              // If accessed directly in browser (accept: text/html), render formatted HTML with UTF-8 meta
              if (req.headers.accept && req.headers.accept.includes('text/html')) {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(`<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Logic Workout — Інструкція та теорія</title>
  <style>
    body {
      background: #090d16;
      color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      padding: 32px 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    a { color: #38bdf8; text-decoration: none; }
    a:hover { text-decoration: underline; }
    pre {
      background: #070b14;
      border: 1px solid #243048;
      border-radius: 8px;
      padding: 14px;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 13px;
      color: #7dd3fc;
    }
    code {
      background: rgba(255,255,255,0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 13px;
      color: #38bdf8;
    }
    h1, h2, h3, h4 { color: #fff; margin-top: 24px; margin-bottom: 12px; }
    h1 { border-bottom: 1px solid #243048; padding-bottom: 12px; font-size: 26px; }
    h2 { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; font-size: 20px; color: #38bdf8; }
    blockquote {
      border-left: 4px solid #38bdf8;
      background: rgba(56, 189, 248, 0.08);
      margin: 16px 0;
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
    }
    .back-btn {
      display: inline-block;
      margin-bottom: 20px;
      padding: 8px 14px;
      background: #111827;
      border: 1px solid #243048;
      border-radius: 6px;
      color: #38bdf8;
      font-size: 13px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <a href="/" class="back-btn">← Повернутися до інтерактивного тренажера</a>
  <pre style="white-space: pre-wrap; word-break: break-word; color: #f1f5f9; background: #111827;">${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</body>
</html>`);
                return;
              }

              // Otherwise raw markdown with strict UTF-8 charset
              res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
              res.end(content);
              return;
            }
          }

          // Force UTF-8 charset on any markdown or text file
          if (url.endsWith('.md') || url.endsWith('.txt')) {
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
          }

          next();
        });
      }
    }
  ]
};
