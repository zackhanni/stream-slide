import Image from "next/image";
import ConnectToMedia from "./components/ConnectToMedia";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ConnectToMedia />
    </main>
  );
}
