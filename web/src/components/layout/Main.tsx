export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[40px]">
      <main className="container mx-auto flex flex-col gap-6 px-8 py-6">{children}</main>
    </div>
  );
}
