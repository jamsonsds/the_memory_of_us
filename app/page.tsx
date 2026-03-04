const routes = ["/login", "/memories", "/gallery", "/future", "/messages"];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">The Memory of Us</h1>
      <p className="text-lg text-slate-600">
        Next.js App Router project initialized with TypeScript and Tailwind CSS.
      </p>
      <ul className="grid gap-3 text-sm text-slate-700">
        {routes.map((route) => (
          <li key={route} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            {route}
          </li>
        ))}
      </ul>
    </main>
  );
}
