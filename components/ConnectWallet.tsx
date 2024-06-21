"use client"
import { Account } from "@/components/Account";
import { WalletOptions } from "@/components/WalletOptions";
import { useAccount } from "wagmi";

export const ConnectWallet = () => {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
};
