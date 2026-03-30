import { NextRequest, NextResponse } from "next/server";

const NIRVANA_ENDPOINT =
  "https://4c3hafih3ijk2vpqarkbi6i6qa0aptop.lambda-url.us-west-2.on.aws/export/6a585ab8-6651-46eb-81d4-2bd606e44b9f/connect";

export async function POST(req: NextRequest) {
  try {
    const { query, session } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid query" },
        { status: 400 },
      );
    }

    const apiKey = process.env.NIRVANA_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 },
      );
    }

    const body: Record<string, string> = { query };
    if (session) body.session = session;

    const upstream = await fetch(NIRVANA_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      return NextResponse.json(
        { error: "Upstream error", detail },
        { status: upstream.status },
      );
    }

    const data = await upstream.json();
    return NextResponse.json(data);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
