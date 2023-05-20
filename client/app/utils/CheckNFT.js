'use client';
import { useAccount } from 'wagmi';

export function CheckNFT() {
  const axios = require('axios');

  const { address } = useAccount();

  // Avalanche Fuji 테스트넷 JSON-RPC API (메인넷의 경우 네트워크 ID 변경 필요)
  const apiUrl = `https://glacier-api.avax.network/v1/chains/2000777/addresses/${address}/balances:listErc721?pageSize=100`;

  // NFT 정보를 가져오는 함수
  async function getOwnedNFTs() {
    try {
      const response = await axios.get(apiUrl);

      const data = response?.data?.erc721TokenBalances.filter(
        (e) => e.address === '0x7b7769C563e054CAD9CaCb3f81DF1C80ef51ac09'
      );

      console.log(data);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  }

  getOwnedNFTs();
}
