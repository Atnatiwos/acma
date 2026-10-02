import { Inter, Lusitana } from "next/font/google";
import { Unica_One } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
});
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
