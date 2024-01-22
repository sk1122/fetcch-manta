"use client"

import React from "react"
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { arbitrum, avalanche, mainnet, optimism, polygon ,manta} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export default function RainbowProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { chains, publicClient } = configureChains(
    // @ts-ignore
    [manta],
    [jsonRpcProvider({
      rpc: (chain: any) => ({
        http: `https://pacific-rpc.manta.network/http`
      })
    })]
  )

  const { connectors } = getDefaultWallets({
    appName: "Fetcch Request",
    projectId: "0974b34f25ed7cffd33b4d97ee73fe6d",
    chains,
  })

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="wide"
        theme={lightTheme({
          borderRadius: "small",
          fontStack: "system"
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
