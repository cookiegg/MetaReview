import fs from 'fs';
import path from 'path';
import Script from 'next/script';

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src/app/papers/data');
  const venues = fs.readdirSync(dataDir);
  const params = [];

  for (const venue of venues) {
    const venuePath = path.join(dataDir, venue);
    if (fs.statSync(venuePath).isDirectory()) {
      const years = fs.readdirSync(venuePath);
      for (const year of years) {
        if (fs.statSync(path.join(venuePath, year)).isDirectory()) {
          params.push({ venue, year });
        }
      }
    }
  }

  return params;
}

export default async function Page({ params }: any) {
  const { venue, year } = params;
  const filePath = path.join(process.cwd(), 'src/app/papers/data', venue, year, `${venue}_${year}.html`);
  
  try {
    const htmlContentFull = await fs.promises.readFile(filePath, 'utf-8');
    const headMatch = htmlContentFull.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const bodyMatch = htmlContentFull.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const scriptMatch = htmlContentFull.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    
    const headContent = headMatch ? headMatch[1] : '';
    const bodyContent = bodyMatch ? bodyMatch[1] : '';
    const scriptContent = scriptMatch ? scriptMatch[1] : '';

    return (
      <>
        <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <div dangerouslySetInnerHTML={{ __html: headContent }} />
        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
        <Script id="chart-init" strategy="afterInteractive">
          {scriptContent}
        </Script>
      </>
    );
  } catch (error) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-600">未找到会议概要图</p>
      </div>
    );
  }
} 