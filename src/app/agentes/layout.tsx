import type { Metadata } from "next";

/* agentes/page.tsx is a client component and cannot export metadata, so the
   canonical for /agentes lives here. Children override it with their own:
   see agentes/[id]/page.tsx. */
export const metadata: Metadata = {
  alternates: { canonical: "/agentes" },
};

export default function AgentesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
