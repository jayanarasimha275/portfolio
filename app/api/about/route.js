import { NextResponse } from "next/server";
import { tablesDB, DATABASE_ID } from "@/lib/appwrite";

export async function GET() {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: "about",
    });

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Appwrite error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
