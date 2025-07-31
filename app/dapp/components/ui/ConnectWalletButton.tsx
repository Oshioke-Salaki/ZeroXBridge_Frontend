import WalletIcon from "@/svg/WalletIcon";
import React from "react";

function ConnectWalletButton({ className }: { className?: string }) {
  return (
    <button
      className={`flex gap-x-2 justify-center items-center px-3 py-[10px] rounded-[8px] text-primary-text border border-wallet-border ${className}`}
      style={{
        backgroundImage: "var(--linear-primary-gradient)",
      }}
    >
      <WalletIcon />
      <span className="inline-block">Connect Wallet</span>
    </button>
  );
}

export default ConnectWalletButton;
