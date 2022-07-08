import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import { NextEvent } from '@/lib/meetup'

type Props = {
  nextEvent: NextEvent | null
}

export function Header({ nextEvent }: Props) {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          {nextEvent && (
            <div className="mx-auto flex items-center gap-4 px-4">
              <p>
                <time>{nextEvent.startDateFullText}</time>
              </p>
              <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
              <p>{nextEvent.venue.name}</p>
            </div>
          )}
        </div>
        {nextEvent && (
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button.Link href={nextEvent.link}>RSVP now</Button.Link>
          </div>
        )}
        {!nextEvent && (
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button.Link href="https://meetup.com/react-cologne">
              Check meetup.com
            </Button.Link>
          </div>
        )}
      </Container>
    </header>
  )
}
