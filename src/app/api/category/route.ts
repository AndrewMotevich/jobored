import { CategoryDataType } from "@/models/categoryDataType";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await axios.get(
    "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/parent/33",
    {
      headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    }
  );
  return NextResponse.json(response.data);
}
