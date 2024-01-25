
import { Inter } from "next/font/google";
import { Videocard } from "@/components/Videocard";
import { Videogrid } from "@/components/Videogrid";
import { Appbar } from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div>
    <Appbar></Appbar>
  <Videogrid></Videogrid>
  </div>
  );
}
