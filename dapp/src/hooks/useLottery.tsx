

import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import Web3 from "web3";
import { abi } from "../abi/Lottery.json";
import { AbiItem } from "web3-utils";

export const useLottery = () => {
  const web3 = useWeb3React<Web3>();

  const contract = useMemo(() => {
    if (web3.account) {
      return new web3.library!.eth.Contract(
        abi as AbiItem[],
        "0x4DC238F68FC2EA589101f8E6e85E53C8D7E3Cab0"
      );
    }

    return null;
  }, [web3.library, web3.account]);

  return contract;
};