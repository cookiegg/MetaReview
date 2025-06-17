import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

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
  redirect(`/papers/${venue}/${year}/html`);
} 