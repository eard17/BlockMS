/**
 * Block MS — Asset Generator
 * Genera icon.png (1024×1024) y splash.png (2732×2732)
 * Sin dependencias externas — solo Node.js built-ins.
 */
import { writeFileSync } from 'fs';
import { deflateSync } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSETS = join(ROOT, 'assets');

// ── PNG encoder ───────────────────────────────────────────────────────────────

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function pngChunk(type, data) {
  const t = Buffer.from(type);
  const len = Buffer.allocUnsafe(4); len.writeUInt32BE(data.length);
  const crc = Buffer.allocUnsafe(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}

function encodePNG(w, h, pixels) {
  // Filter byte 0 (None) prepended to each scanline
  const raw = Buffer.allocUnsafe(h * (1 + w * 4));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + w * 4)] = 0;
    pixels.copy(raw, y * (1 + w * 4) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Draw helpers ──────────────────────────────────────────────────────────────

/** Fill entire buffer with a solid background color. */
function fillBg(buf, w, h, r, g, b) {
  for (let i = 0; i < w * h; i++) {
    buf[i * 4] = r; buf[i * 4 + 1] = g; buf[i * 4 + 2] = b; buf[i * 4 + 3] = 255;
  }
}

/** Set a single RGBA pixel. */
function px(buf, w, x, y, r, g, b, a = 255) {
  const i = (y * w + x) * 4;
  buf[i] = r; buf[i + 1] = g; buf[i + 2] = b; buf[i + 3] = a;
}

/** Fill a rounded rectangle (SDF approach — no external deps). */
function roundedRect(buf, W, H, x, y, rw, rh, rad, r, g, b) {
  const x2 = x + rw, y2 = y + rh;
  const cx1 = x + rad, cx2 = x2 - rad;
  const cy1 = y + rad, cy2 = y2 - rad;
  const r2  = rad * rad;
  for (let py = Math.max(0, y); py < Math.min(H, y2); py++) {
    const cy = py < cy1 ? cy1 : py > cy2 ? cy2 : py;
    const dy = py - cy;
    for (let pxi = Math.max(0, x); pxi < Math.min(W, x2); pxi++) {
      const cx = pxi < cx1 ? cx1 : pxi > cx2 ? cx2 : pxi;
      const dx = pxi - cx;
      if (dx * dx + dy * dy <= r2) px(buf, W, pxi, py, r, g, b);
    }
  }
}

// ── Brand colors ──────────────────────────────────────────────────────────────
const BG    = [13,  17,  23 ]; // #0d1117  dark background
const CYAN  = [94,  213, 237]; // #5ed5ed
const PUR   = [191, 143, 239]; // #bf8fef
const PINK  = [242, 140, 191]; // #f28cbf
const GREEN = [103, 228, 166]; // #67e4a6

const PALETTE = [
  [CYAN,  PUR  ],
  [PINK,  GREEN],
];

/** Draw the 2×2 block logo centered in a canvas of W×H. */
function drawLogo(buf, W, H, blockSz, gap, rad) {
  const gridW = 2 * blockSz + gap;
  const gridH = 2 * blockSz + gap;
  const ox = Math.floor((W - gridW) / 2);
  const oy = Math.floor((H - gridH) / 2);
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      const [r, g, b] = PALETTE[row][col];
      roundedRect(buf, W, H,
        ox + col * (blockSz + gap),
        oy + row * (blockSz + gap),
        blockSz, blockSz, rad, r, g, b);
    }
  }
}

// ── icon.png — 1024×1024 ──────────────────────────────────────────────────────
console.log('Generating icon.png (1024×1024)…');
{
  const W = 1024, H = 1024;
  const buf = Buffer.alloc(W * H * 4);
  fillBg(buf, W, H, ...BG);
  drawLogo(buf, W, H, 200, 24, 24);
  const out = encodePNG(W, H, buf);
  writeFileSync(join(ASSETS, 'icon.png'),      out);
  writeFileSync(join(ASSETS, 'icon-only.png'), out); // capacitor-assets alias
  console.log('  ✅ icon.png + icon-only.png');
}

// ── splash.png — 2732×2732 ────────────────────────────────────────────────────
console.log('Generating splash.png (2732×2732) — may take a moment…');
{
  const W = 2732, H = 2732;
  const buf = Buffer.alloc(W * H * 4);
  fillBg(buf, W, H, ...BG);

  // Slightly above center for visual balance
  const blockSz = 440, gap = 52, rad = 52;
  const gridW = 2 * blockSz + gap;
  const gridH = 2 * blockSz + gap;
  const ox = Math.floor((W - gridW) / 2);
  const oy = Math.floor((H - gridH) / 2) - 80; // shift up slightly

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      const [r, g, b] = PALETTE[row][col];
      roundedRect(buf, W, H,
        ox + col * (blockSz + gap),
        oy + row * (blockSz + gap),
        blockSz, blockSz, rad, r, g, b);
    }
  }

  writeFileSync(join(ASSETS, 'splash.png'),      encodePNG(W, H, buf));
  writeFileSync(join(ASSETS, 'splash-dark.png'), encodePNG(W, H, buf)); // dark mode alias
  console.log('  ✅ splash.png + splash-dark.png');
}

console.log('\n🎉 Done — assets/ ready for @capacitor/assets');
