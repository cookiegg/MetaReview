import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src/app/papers/data');
  const venues = fs.readdirSync(dataDir);
  return venues.map(venue => ({ venue }));
}

export default async function Page({ params }: any) {
  const { venue } = params;
  redirect(`/papers/${venue}/trends/html`);
} 