import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = await dbConnect(
      collectionObj.productsCollection
    );
    const products = await productsCollection.find().toArray();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const productsCollection = await dbConnect(
      collectionObj.productsCollection
    );

    const result = await productsCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error("Error adding product:", err);
    return NextResponse.json(
      { success: false, message: "Error adding product" },
      { status: 500 }
    );
  }
}
