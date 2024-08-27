export default function SlugPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
