import { mkdir, readFile, writeFile } from 'node:fs/promises';

const scholarUrl = 'https://scholar.google.com/citations?user=r_pnp9AAAAAJ&hl=zh-CN';
const outputPath = 'public/scholar.json';

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractCitations(html) {
  const compact = html.replace(/\s+/g, ' ');
  const zhMatch = compact.match(/引用次数<\/a><\/td><td[^>]*class="gsc_rsb_std"[^>]*>([\d,]+)/);
  if (zhMatch) return zhMatch[1].replace(/,/g, '');

  const enMatch = compact.match(/Citations<\/a><\/td><td[^>]*class="gsc_rsb_std"[^>]*>([\d,]+)/i);
  if (enMatch) return enMatch[1].replace(/,/g, '');

  const allStats = [...compact.matchAll(/<td[^>]*class="gsc_rsb_std"[^>]*>([\d,]+)<\/td>/g)].map((match) =>
    match[1].replace(/,/g, ''),
  );
  return allStats[0] ?? null;
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(outputPath, 'utf8'));
  } catch {
    return null;
  }
}

async function main() {
  const existing = await readExisting();
  const response = await fetch(scholarUrl, {
    headers: {
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36',
    },
  });

  if (!response.ok) {
    throw new Error(`Google Scholar returned HTTP ${response.status}`);
  }

  const html = decodeHtml(await response.text());
  const citations = extractCitations(html);
  if (!citations) {
    throw new Error('Could not extract citation count from Google Scholar page');
  }

  const payload = {
    citations,
    citationsLabel: `${citations}+`,
    source: scholarUrl,
    updatedAt: new Date().toISOString(),
  };

  await mkdir('public', { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Updated ${outputPath}: ${payload.citationsLabel}`);

  if (existing?.citations && existing.citations !== citations) {
    console.log(`Previous citation count: ${existing.citations}`);
  }
}

main().catch(async (error) => {
  const existing = await readExisting();
  if (existing?.citations) {
    console.warn(`Scholar update failed, keeping existing value ${existing.citations}: ${error.message}`);
    return;
  }
  throw error;
});
