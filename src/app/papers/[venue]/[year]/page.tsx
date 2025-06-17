import { redirect } from 'next/navigation';

export default async function ConferencePage({
  params,
}: {
  params: { venue: string; year: string };
}) {
  const { venue,year } = await params;
  redirect(`/papers/${venue}/${year}/html`);
} 