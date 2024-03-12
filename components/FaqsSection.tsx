import { ArrowRight, Star } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import Link from "next/link"
import { Accordion } from "./Accordion"
import { faqs } from "@/constants"

export const FaqsSection = () => {
  return (
    <section className="max-width section-padding overflow-hidden">
      <SectionHeading
        title="Frequently Asked Question"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis molestiae eius repellendus qui. Quis deserunt, eius perferendis optio est quam dolore tempora architecto impedit culpa iusto, quod quibusdam illo."
      />
      <div className="flex flex-col tablet:flex-row gap-5 items-start">
        <div className="box">
          <Accordion data={faqs} />
        </div>
        <div className="box flex flex-col gap-5 tablet:max-w-md">
          <div className="w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2">
            <Star fill="currentColor" size={30} />
          </div>
          <div>
            <h5 className="text-gray-700 mb-2">Still have any question?</h5>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab a, aspernatur, nesciunt odio magnam eos aperiam eveniet autem accusantium ex hic quasi itaque provident. Repellendus rerum praesentium at hic.
            </p>
          </div>
          <Link href='/contact' className="btn btn-primary w-max">
            Contact me <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}