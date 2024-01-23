import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/fetcch.svg"
import manta from "@/public/assets/manta.svg"

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
        <Link
          href="#"
          className="text-[#363C46] transition-all duration-200 hover:text-primary"
        >
          Resources
        </Link>
      </ul>
      <div className="max-w-fit">
        <ConnectWalletButton />
      </div>
    </div>
  )
}

export default MainNav
