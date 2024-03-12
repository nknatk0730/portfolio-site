import { PortfolioSection } from "@/components/PortfolioSection"
import { portfolios } from "@/constants"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'portfolio - John doe',
}

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col gap-3 items-center">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src='/icons/stars.svg' alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-gray-700">My Creative Portfolios</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi et quaerat molestias nostrum at, doloribus magnam</p>
        </div>
      </section>
      <PortfolioSection data={portfolios} title={'Projects Done in 2023'} />
      {/* removing first 3 portfolio and adding at last to make a variation */}
      <PortfolioSection
        data={portfolios.slice(3).concat(portfolios.slice(0, 3))}
        title={'Projects Done in 2022'}
      />
      {/* same with 6 */}
      <PortfolioSection
        data={portfolios.slice(6).concat(portfolios.slice(0, 6))}
        title={'Projects Done in 2021'}
      />
    </>
  )
}

export default page