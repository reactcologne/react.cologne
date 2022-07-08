import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/bg-open.jpg'

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="relative pb-20 sm:pb-32 sm:pt-12"
    >
      <div className="absolute inset-x-0 top-10 bottom-0 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-full top-0 -translate-x-1/2 select-none sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative z-10">
        <div>
          <div className="prose-xl mx-auto sm:prose-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display font-medium tracking-tighter text-blue-600 sm:text-5xl">
              React.Cologne is an Open Space for everyone
            </h2>
            <p className="font-display tracking-tight text-blue-900">
              The React Cologne meetup is a community effort. We want to build a
              meetup for the community, by the community. Everybody can suggest
              topics – something you want to talk about, or something you would
              like to hear about – and the community will vote on which topics
              are covered in the meetup. Topics can cover anything that the
              community is interested in and is not strictly confined to React.
              In the past topics like APIs, testing, DevOps etc. were also
              popular.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-12 overflow-x-auto">
        <Container>
          <div className="-mx-8">
            <ol
              role="list"
              className="mx-8 inline-flex items-stretch divide-x divide-indigo-500/10 bg-white/60 py-6 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
            >
              <Slot
                title="Arrive"
                info="Chat, Grab a Drink"
                time="6:00 pm - 6:30 pm"
              />
              <Slot
                title="Greeting"
                info="Host Intro"
                time="6:30 pm - 7:00 pm"
              />
              <Slot
                title="Session Planning"
                info="Your Suggestions"
                time="7:00 pm - 7:30 pm"
              />
              <Slot
                title="Slot #1"
                info="With 2 Tracks"
                time="7:30 pm - 8:30 pm"
              />
              <Slot
                title="Slot #2"
                info="With 2 Tracks"
                time="8:30 pm - 9:30 pm"
              />
              <Slot
                title="After Hour"
                info="Chat, Drink, Hang out"
                time="9:30 pm - 10:30 pm"
              />
            </ol>
          </div>
        </Container>
      </div>
    </section>
  )
}

function Slot(props: { title: string; info?: string; time: string }) {
  return (
    <li className="flex min-w-[203px] flex-1 flex-col justify-between py-4 pr-4 pl-4">
      <h4 className="text-lg font-semibold tracking-tight text-blue-900">
        {props.title}
      </h4>
      <p className="mt-1 tracking-tight text-blue-900">{props.info}</p>
      <p className="mt-2 font-mono text-sm text-slate-500">{props.time}</p>
    </li>
  )
}
