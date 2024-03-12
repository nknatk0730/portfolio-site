import { FaqsSection } from "@/components/FaqsSection"
import { socialLinks } from "@/constants"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Contact - John Doe', 
}

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col gap-3 items-center">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src='/icons/stars.svg' alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-gray-700">I&apos;d love to hear from you.</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi et quaerat molestias nostrum at, doloribus magnam</p>
        </div>
      </section>
      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-gray-600">You can Email Me here</p>
              <h6 className="text-gray-700">email@gmail.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-gray-600">Give Me a Call on</p>
              <h6 className="text-gray-700">+123456789</h6>
            </div>
            <div className="box !p-6">
              <p className="text-gray-600">Location</p>
              <h6 className="text-gray-700">Lorem Street</h6>
            </div>
          </div>
          <h6 className="mt-10 mb-3 text-gray-700 max-tablet:text-center">My Social Profiles</h6>
          <div className="flex gap-3 box !p-6 w-max  max-tablet:mx-auto">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>
        <div className="box w-full">
          <form action="" className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name"/>
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone"/>
            </div>
            <textarea placeholder="Message" className="min-h-[200px]"></textarea>
            <button type="submit" className="btn btn-primary">send</button>
          </form>
        </div>
      </section>
      <FaqsSection />
    </>
  )
}

export default page