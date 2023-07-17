import { CategoryDataType } from "@/models/categoryDataType";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const keyword = searchParams.get("keyword");
  const payment_from = searchParams.get("payment_from");
  const payment_to = searchParams.get("payment_to");
  const catalogues = searchParams.get("catalogues");
  const count = searchParams.get("count");
  const page = searchParams.get("page");

  const response = await axios.get("https://api.superjob.ru/2.0/vacancies/", {
    params: {
      published: 1,
      keyword,
      payment_from,
      payment_to,
      catalogues,
      count,
      page,
    },
    headers: {
      "X-Api-App-Id":
        "v3.r.137565094.06237d5925c53f20473fd5acae6464af94354a74.50660330abc2faa16c4a8b9340865c17d9d30f0c",
    },
  });
  return NextResponse.json(response.data);
}
