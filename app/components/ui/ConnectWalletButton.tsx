import WalletIcon from "@/svg/WalletIcon";
import React from "react";

function ConnectWalletButton() {
  return (
    <button
      className="flex gap-x-2 items-center px-3 py-[10px] rounded-[8px] text-primary-text border-[1px] border-[#EFEFEF] dark:border-transparent"
      style={{
        backgroundImage: "var(--color-linear-primary-gradient)",
      }}
    >
      <WalletIcon />
      <span className="inline-block text-sm">Connect Wallet</span>
    </button>
  );
}

export default ConnectWalletButton;
