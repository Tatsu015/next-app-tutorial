export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        Blog layout
      </div>
      <div>{children}</div>
    </div>
  );
}
