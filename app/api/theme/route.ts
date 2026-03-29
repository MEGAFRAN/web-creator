import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import type { Theme } from "@/lib/theme";
import { deepMergeObjects } from "@/lib/theme-utils";

const themePath = path.join(process.cwd(), "lib", "theme.json");

function readTheme(): Theme {
  return JSON.parse(fs.readFileSync(themePath, "utf-8")) as Theme;
}

export async function GET(): Promise<NextResponse> {
  try {
    const theme = readTheme();
    return NextResponse.json(theme);
  } catch {
    return NextResponse.json({ error: "Failed to read theme" }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: unknown = await request.json();

    if (body === null || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Request body must be a JSON object" },
        { status: 400 }
      );
    }

    const current = readTheme();
    const merged = deepMergeObjects(
      current as unknown as Record<string, unknown>,
      body as Record<string, unknown>
    ) as unknown as Theme;

    fs.writeFileSync(themePath, JSON.stringify(merged, null, 2), "utf-8");

    return NextResponse.json({ success: true, theme: merged });
  } catch {
    return NextResponse.json({ error: "Failed to write theme" }, { status: 500 });
  }
}
