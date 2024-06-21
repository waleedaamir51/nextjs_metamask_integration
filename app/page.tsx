import { ConnectWallet } from "@/components/ConnectWallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectWallet />
    </main>
  );
}
