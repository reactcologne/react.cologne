import Image from 'next/future/image'
import * as React from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/bg-close.jpg'
import { NextEvent } from '@/lib/meetup'

type Props = {
  nextEvent: NextEvent
}

export function NextEventHero({ nextEvent }: Props) {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[2%] translate-x-[-55%] select-none sm:left-1/2 sm:translate-x-[-98%] lg:translate-x-[-96%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <a href={nextEvent.link} rel="noopener noreferrer">
              {nextEvent.title}
            </a>
          </h1>
          {nextEvent.image && (
            <Image
              src={nextEvent.image}
              className="mt-8 rounded-md shadow-xl shadow-gray-300"
              width={800}
              height={450}
              alt=""
            />
          )}
          <dl className="mt-8 grid grid-cols-2 gap-y-6 gap-x-10 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <Detail title="Date">{nextEvent.startDateText}</Detail>
            <Detail title="Time">{nextEvent.startTimeText}</Detail>
            <Detail title="Host">{nextEvent.venue.name}</Detail>
            <Detail title="Address">
              <a
                href={`https://maps.google.com/?q=${nextEvent.venue.geoLat},${nextEvent.venue.geoLong}`}
                rel="noreferrer noopener"
              >
                {nextEvent.venue.address}
              </a>
            </Detail>
          </dl>
          <div
            className="prose-xl mt-6 space-y-6 font-display tracking-tight text-blue-900 prose-a:text-[color:#fa45ac] sm:prose-2xl"
            dangerouslySetInnerHTML={{ __html: nextEvent.description }}
          />
          <Button.Link href={nextEvent.link} className="mt-10 w-full">
            RSVP now
          </Button.Link>
        </div>
      </Container>
    </div>
  )
}

function Detail(props: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-sm text-blue-600">{props.title}</dt>
      <dd className="mt-0.5 text-lg font-semibold tracking-tight text-blue-900 sm:text-xl md:text-2xl">
        {props.children}
      </dd>
    </div>
  )
}
