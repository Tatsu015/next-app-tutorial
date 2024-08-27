export default function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> My Post: {params.slug}</div>;
    </main>
  );
}
