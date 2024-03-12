import { SectionHeading } from "@/components/SectionHeading";
import { timeline } from "@/constants";
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: ' About - John Doe',
}

const page = () => {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
          <Image
            src="/images/about.png"
            fill
            alt="about img"
            className="object-cover"
          />
        </div>
        <div className="tablet:w-1/2">
          <div className="space-y-3 max-tablet:text-center flex flex-col">
            <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded tablet:w-max max-tablet:mx-auto">
              Welcome to the world of captivating web development!
            </p>
            <h1 className="text-gray-700">I&apos;m John Doe</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sapiente minus fuga beatae provident praesentium incidunt, facere
              accusantium distinctio quo aperiam assumenda nihil ipsum
              similique! Dolor esse eligendi tempora totam!
            </p>
          </div>
          <div
            className="bg-peach-400 rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2 tablet:border-b-2
              tablet:border-purple w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row"
          >
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-gray-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-gray-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="flex items-center gap-10 justify-center tablet:block">
              <h3 className="text-gray-700">
                55 <span className="text-purple">+</span>
              </h3>
              <p className="text-gray-600">Years of experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* milestones section */}
      <section>
        <SectionHeading
          title="Milestones of my career"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia exercitationem consequuntur aliquid, eaque deserunt
            sapiente ea porro unde laboriosam odit dolore magni. Temporibus
            praesentium illo delectus adipisci perferendis, nostrum repudiandae."
        />
        <div
          className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px
            tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30"
        >
          {
            timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1
                    tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:bg-peach-600 group-first:before:absolute group-first:before:w-1
                    group-first:before:h-20 group-first:before:bottom-full group-last:before:absolute group-last:before:top-full group-last:before:bg-peach-600
                    group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full"
                >
                  <span className="w-3 h-3 bg-purple rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <h6 className="text-gray-700">{item.title}</h6>
                    <p className="font-semibold text-purple">{item.duration}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}

export default page