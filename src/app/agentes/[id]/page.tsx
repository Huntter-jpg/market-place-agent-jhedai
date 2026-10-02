import type { Metadata } from "next";
import { agents } from "@/data/agents";
import { notFound } from "next/navigation";
import AgentDetailClient from "./AgentDetailClient";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  return { alternates: { canonical: `/agentes/${params.id}` } };
}

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export default function AgentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) {
    notFound();
  }

  return <AgentDetailClient id={params.id} />;
}
