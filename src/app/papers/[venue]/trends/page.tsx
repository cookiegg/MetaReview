import { redirect } from 'next/navigation';

export default async function TrendsPage({
  params,
}: {
  params: { venue: string };
}) {
  const { venue } = await params;
  redirect(`/papers/${venue}/trends/html`);
} 