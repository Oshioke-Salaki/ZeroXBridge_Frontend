import WalletIcon from "@/svg/WalletIcon";
import React from "react";

function ConnectWalletButton({
  className,
  onConnect,
}: {
  className?: string;
  onConnect?: () => void;
}) {
  return (
    <button
      className={`flex gap-x-2 justify-center items-center px-3 py-[10px] rounded-[8px] text-primary-text border border-wallet-border shadow-sm-connect-shadow ${className}`}
      onClick={onConnect}
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
