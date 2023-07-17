import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await axios.get(
    "https://api.superjob.ru/2.0/catalogues/parent/33",
    {
      headers: {
        "X-Api-App-Id":
          "v3.r.137565094.06237d5925c53f20473fd5acae6464af94354a74.50660330abc2faa16c4a8b9340865c17d9d30f0c",
      },
    }
  );
  return NextResponse.json(response.data);
}
