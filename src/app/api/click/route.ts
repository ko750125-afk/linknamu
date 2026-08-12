import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function GET() {
  const clientPromise = getMongoClientPromise();

  if (!clientPromise) {
    return NextResponse.json({});
  }

  const client = await clientPromise;
  const db = client.db();
  const docs = await db
    .collection("clicks")
    .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
    .toArray();

  const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const { id } = (await request.json()) as { id?: string };

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  const clientPromise = getMongoClientPromise();

  if (!clientPromise) {
    console.warn("MONGODB_URI가 설정되지 않아 클릭 수를 기록하지 않습니다.");
    return new NextResponse(null, { status: 204 });
  }

  const client = await clientPromise;
  const db = client.db();
  await db
    .collection("clicks")
    .updateOne({ linkId: id }, { $inc: { count: 1 } }, { upsert: true });

  return new NextResponse(null, { status: 204 });
}
