"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import SwapInput from "./components/SwapInput";
import SwapIcon from "@/svg/SwapIcon";
import ConnectWalletButton from "../components/ui/ConnectWalletButton";

function SwapToggle() {
  return (
    <div className="absolute left-1/2 top-[169.5px] -translate-x-1/2 z-10 border-[#EEEEEE] dark:border-[#151515] border-[3px] w-[35.5px] h-[35.5px] rounded-full flex items-center justify-center bg-[#FFFFFF] dark:bg-[#232323]">
      <span className="rotate-90 dark:text-[#999999]">
        <SwapIcon className="w-[18px] h-[18px]" />
      </span>
    </div>
  );
}

export default function SwapPage() {
  const isConnected = true;
  const [swapDetails, setSwapDetails] = useState([
    ["Price", "1 ETH = 1928 STRK"],
    ["Frontend Fee:", "$1.23"],
    ["You'd receive:", "$3492.10"],
  ]);
  let [fromAmount, setFromAmount] = useState("");
  let [toAmount, setToAmount] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full lg:w-[440px] h-fit p-[1.11px] rounded-[18px] overflow-hidden"
        style={{
          backgroundImage: "var(--container-border)",
        }}
      >
        <div className="bg-container h-full w-full rounded-[18px]">
          <div className="pt-3 pr-4 flex justify-end pb-2 text-foreground">
            <button>
              <Menu />
            </button>
          </div>

          <div className="relative flex flex-col gap-y-3">
            <SwapToggle />
            <SwapInput
              token={{ logo: "/token-logos/strk-logo.svg", symbol: "STRK" }}
              amount="12"
              balance="10"
              type="from"
              fromAmount={fromAmount}
              setFromAmount={setFromAmount}
            />
            <SwapInput
              token={{ logo: "/token-logos/eth-logo.svg", symbol: "ETH" }}
              amount="120"
              type="to"
              toAmount={toAmount}
            />
          </div>

          <div className="p-5 pt-[25px]">
            <div className="flex flex-col space-y-2 mb-6">
              {swapDetails
                .filter(([label]) => isConnected || label !== "You'd receive:")
                .map(([label, value], i) => {
                  const fallbackMap: Record<string, string> = {
                    Price: "-- USDT per ETH",
                    "Frontend Fee:": "$0",
                  };

                  const displayValue = isConnected
                    ? value
                    : fallbackMap[label] || "--";

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm/[113%]"
                    >
                      <span className="text-[#909090] dark:text-[#737373] tracking-[-2%]">
                        {label}
                      </span>
                      <span className="text-[#1D1D1D] dark:text-[#AFAFAF] tracking-[-2%]">
                        {displayValue}
                      </span>
                    </div>
                  );
                })}
            </div>

            {isConnected ? (
              <button
                className="py-3 text-center w-full text-[#F4F4F4] dark:text-[#111111] rounded-full"
                style={{
                  backgroundImage: "var(--linear-reverse-primary-gradient)",
                }}
              >
                Swap
              </button>
            ) : (
              <ConnectWalletButton className="w-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
