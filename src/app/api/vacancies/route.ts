import { CategoryDataType } from "@/models/categoryDataType";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const keyword = searchParams.get("keyword");
  const payment_from = searchParams.get("payment_from");
  const payment_to = searchParams.get("payment_to");
  const catalogues = searchParams.get("catalogues");

  const response = await axios.get(
    "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/",
    {
      params: {
        published: 1,
        keyword,
        payment_from,
        payment_to,
        catalogues,
      },
      headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    }
  );
  return NextResponse.json(response.data);
}
