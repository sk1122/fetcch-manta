"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/fetcch.svg"
import manta from "@/public/assets/manta.svg"
import * as Menubar from "@radix-ui/react-menubar"

import ConnectWalletButton from "./connect-wallet-button"

const MainNav = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between px-6 xl:h-28 xl:px-20">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo" priority />
          x
          <Image src={manta} alt="logo" priority />
        </div>
      </Link>
      <ul className="hidden items-center space-x-6 md:flex xl:space-x-12">
        <Link
          href="https://fetcch.xyz/about-us"
          className="text-[#363C46] transition-all duration-200 hover:text-primary"
        >
          About Us
        </Link>
        <Link
          href="https://docs.fetcch.xyz/"
          className="text-[#363C46] transition-all duration-200 hover:text-primary"
        >
          Integrate
        </Link>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className="text-[#363C46] transition-all duration-200 hover:text-primary">
              Resources
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-[220px] rounded-md bg-white p-[5px] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] z-50"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                <Menubar.Item>
                  <Link
                    href="https://writings.fetcch.xyz"
                    target="_blank"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Writings
                  </Link>
                </Menubar.Item>
                <Menubar.Item>
                  <Link
                    href="/report-with-anq"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Reports
                  </Link>
                </Menubar.Item>
                <Menubar.Item>
                  <Link
                    href="https://docs.fetcch.xyz/faqs/faqs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </ul>
      <div className="max-w-fit">
        <ConnectWalletButton />
      </div>
    </div>
  )
}

export default MainNav
