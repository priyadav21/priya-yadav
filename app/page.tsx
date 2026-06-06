import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 h-screen w-screen">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
