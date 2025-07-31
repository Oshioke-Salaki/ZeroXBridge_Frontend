import { ChevronDown } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
interface TokenInfo {
  logo: string;
  symbol: string;
}

interface SwapInputProps {
  token: TokenInfo;
  amount: string;
  balance?: string;
  type?: "from" | "to";
  fromAmount?: string;
  setFromAmount?: Dispatch<SetStateAction<string>>;
  toAmount?: string;
}

const numberRegex = /^[0-9]*[.,]?[0-9]*$/;

function SwapInput({
  token,
  amount,
  balance,
  type = "from",
  fromAmount,
  setFromAmount,
  toAmount,
}: SwapInputProps) {
  const isConnected = true;
  return (
    <div
      className="bg-card border-[1.1px] border-card-border p-4 font-light rounded-[16px]"
      style={{
        boxShadow: "0px 0px 14px 0px #00000014",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-x-3">
          <div className="w-11 h-11 flex justify-center items-center bg-[#F6F6F6] dark:bg-[#272727] rounded-full">
            <img src={token.logo} alt="" />
          </div>

          <div className="flex flex-col space-y-0.5">
            <span className="text-[#C1C1C1] dark:text-[#737373] capitalize">
              {type}
            </span>
            <span className="text-foreground">{token.symbol}</span>
          </div>
        </div>

        <button className="w-[35px] h-[35px] rounded-full border-[#E9E9E9] dark:border-[#292929] border-[1.11px] flex justify-center items-center text-[#5C5C5C] dark:text-[#989898]">
          <ChevronDown size={18} />
        </button>
      </div>

      <div
        className={`flex items-center ${
          type === "from" && "mb-[14px]"
        } w-full space-x-2`}
      >
        <input
          placeholder="0.00"
          disabled={!isConnected || type === "to"}
          className={`text-[32px]/[106%] text-[#1E1E1E]   ${
            type === "to"
              ? "text-[#1E1E1E] dark:text-[#F4F4F4] disabled:text-[#DDDDDD] dark:disabled:text-[#F4F4F4]"
              : "dark:text-[#F4F4F4] disabled:text-[#DDDDDD] dark:disabled:text-[#353535]"
          }  !font-light -tracking-[4%] font-mono w-full focus:outline-none`}
          value={
            !isConnected ? "0.00" : type === "from" ? fromAmount : toAmount
          }
          onChange={(e) => {
            if (type === "from" && setFromAmount) {
              const value = e.target.value;
              if (numberRegex.test(value)) {
                setFromAmount(value);
              }
            }
          }}
        />
        {type === "from" && (
          <button
            className="py-[7px] px-[13.4px] bg-[#F4F4F4] dark:bg-[#232323] border-[1.11px] dark:border-none border-[#EEEEEE] rounded-full text-[#737373] dark:text-[#F5F5F5] disabled:text-[#737373] leading-[112%] whitespace-nowrap"
            disabled={!isConnected}
          >
            Max
          </button>
        )}
      </div>

      {type === "from" && (
        <div className="flex items-center justify-between pt-[14.4px] border-t-[#F1F1F1] dark:border-t-[#232323] border-t-[1px] text-[13.3px]/[113%]">
          <span className="text-[#737373] tracking-[-2%]">
            Available Balance:
          </span>
          <span className="text-[#000000] dark:text-[#737373] tracking-[-2%]">
            {!isConnected ? "--" : balance} {token.symbol}
          </span>
        </div>
      )}
    </div>
  );
}

export default SwapInput;
