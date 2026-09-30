import { agents } from "@/data/agents";
import { notFound } from "next/navigation";
import AgentDetailClient from "./AgentDetailClient";

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
