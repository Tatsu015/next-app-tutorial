export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Post layout
      <div>{children}</div>
    </div>
  );
}
