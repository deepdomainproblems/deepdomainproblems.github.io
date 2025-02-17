export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <h1 className="title font-semibold text-2xl tracking-tighter">About</h1>
      <article className="prose">{children}</article>
    </>
  );
}
