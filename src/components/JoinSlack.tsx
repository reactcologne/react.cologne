import * as React from 'react'
import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/bg-close.jpg'

type Props = {
  description?: React.ReactNode
}

export function JoinSlack({ description }: Props) {
  return (
    <section id="join">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute top-60 left-1/2 translate-x-[-10%] translate-y-[-35%] select-none lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1369}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Button.ExternalLink
                href="https://join.slack.com/t/reactcologne/shared_invite/zt-1c52yq0yq-H~p592o9Ej_ZzgozwJwf9w"
                className="flex items-center space-x-2"
              >
                <SlackLogo className="h-8 w-8" />
                <div>Join React.Cologne on Slack</div>
              </Button.ExternalLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function SlackLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="60 60 150 150"
      fill="white"
      {...props}
    >
      <path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9c0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3zM118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9 12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" />
      <g>
        <path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" />
      </g>
      <g>
        <path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" />
      </g>
    </svg>
  )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
