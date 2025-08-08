/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate(): string {
  const now = new Date();

  const day = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();

  const hours24 = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const hours12 = hours24 % 12 || 12;
  const ampm = hours24 >= 12 ? "PM" : "AM";

  return `${day} ${month} ${year} ${hours12}:${minutes}:${seconds}${ampm}`;
}

export const shortenAddress = (address: string) => {
  if (!address) return;
  const shortened = `${address.slice(0, 4)}...${address.slice(-6)}`;
  return shortened;
};

export const getInjectedStarknetWallets = () => {
  if (typeof window === "undefined") return [];

  const wallets = [];

  if ((window as any).starknet_braavos) {
    wallets.push({
      provider: (window as any).starknet_braavos,
    });
  }

  if ((window as any).starknet_argentX) {
    wallets.push({
      provider: (window as any).starknet_argentX,
    });
  }

  if ((window as any).starknet && wallets.length === 0) {
    wallets.push({
      id: (window as any).starknet.id || "unknown",
      name: (window as any).starknet.name || "Unknown Wallet",
      icon: "/wallet-logos/ready.svg",
      provider: (window as any).starknet,
    });
  }

  return wallets;
};
