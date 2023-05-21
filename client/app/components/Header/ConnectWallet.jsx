"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import { useAccount, useConnect, useDisconnect, useSwitchNetwork } from "wagmi";

const $ConnectWalletButton = styled.div`
  width: 11vw;
  height: 4.5vh;
  border-radius: 20px;
  font-size: 1vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #f6b584;
`;

export function ConnectWallet() {
  const { connector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  // const { chain } = useNetwork();
  const {
    chains,
    // switchNetworkError,
    // switchNetworkIsLoading,
    // pendingChacinId,
    switchNetwork,
  } = useSwitchNetwork();

  const router = useRouter();

  const onClickLogin = async () => {
    await connect({ connector: connectors[0] });
  };

  useEffect(() => {
    if (address) {
      switchNetwork(chains[1].id);
      postLogin();
    }
  }, [address]);

  const setCookie = (cookie_name, value, days) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    let cookie_value =
      escape(value) + (days == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
  };

  const postLogin = async () => {
    try {
      const response = await axios.post("http://3.34.138.199:8080/api/login", {
        userWallet: address,
      });
      const data = response.data;
      if (response.status === 200) {
        // 로그인 성공
        setCookie("id", data, 1);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        // 사용자가 없는 경우 회원가입 페이지로 이동
        return router.push("/join");
      } else {
        // 로그인 실패
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div>
        {isConnected && (
          <>
            <$ConnectWalletButton
              className="button"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </$ConnectWalletButton>
          </>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <$ConnectWalletButton
              className="button"
              key={x.id}
              onClick={onClickLogin}
            >
              <Image src="/Core Owl Square.png" width="50" height="20" />
              {!isLoading && "Connect Wallet"}
              {isLoading && x.id === pendingConnector?.id && " (connecting)"}
            </$ConnectWalletButton>
          ))}
      </div>

      {error && <div>{error.shortMessage}</div>}
    </div>
  );
}
