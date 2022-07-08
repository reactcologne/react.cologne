import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NextEventHero } from '@/components/NextEventHero'
import { JoinSlack } from '@/components/JoinSlack'
import { Schedule } from '@/components/Schedule'
import { NextEvent, scrapeNextMeetupEvent } from '@/lib/meetup'
import { Host } from '@/components/Host'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ nextEvent }: Props) {
  return (
    <>
      <Head>
        <title>React.Cologne - React Community Meetup in Cologne</title>
        <meta
          name="description"
          content="The React Cologne meetup is a community effort. We want to build a meetup for the community, by the community."
        />
      </Head>
      <Header nextEvent={nextEvent} />
      <main>
        {nextEvent && <NextEventHero nextEvent={nextEvent} />}
        {!nextEvent && (
          <JoinSlack
            description={
              <>
                We don’t yet have a next event scheduled.* Join our Slack to
                check our plans!
                <br />
                <sub>
                  * or we failed to scrape{' '}
                  <a
                    href="https://meetup.com/react-cologne/"
                    rel="noopener noreferrer"
                  >
                    meetup.com/react-cologne
                  </a>
                </sub>
              </>
            }
          />
        )}
        <Schedule />
        {nextEvent && (
          <JoinSlack description="Suggest Topics, host an event, or simply chat with fellow React enthusiasts. Be part of our Community and join us on Slack!" />
        )}
        <Host />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  type DataSource = 'real' | 'test' | 'none'

  // change this to test locally
  let dataSource = 'test' as DataSource

  let nextEvent: NextEvent | null = testEvent
  if (dataSource === 'none') {
    nextEvent = null
  }
  if (dataSource === 'test') {
    nextEvent = testEvent
  }
  if (process.env.NODE_ENV === 'production' || dataSource === 'real') {
    nextEvent = (await scrapeNextMeetupEvent().catch(() => undefined)) || null
  }

  return {
    props: { nextEvent },
    revalidate: 60 * 60, // 1 hour
  }
}

const testEvent: NextEvent = {
  title: 'React Colgone #XO - placeholder funny name',
  startDate: new Date(2023, 9, 16, 18, 30).toISOString(),
  startDateFullText: new Date(2023, 9, 16, 18, 30).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }),
  startDateText: new Date(2023, 9, 16, 18, 30).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  }),
  startTimeText: new Date(2023, 9, 16, 18, 30).toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }),
  description: `
This is a placeholder description. It supports ✨ <b>Markdown</b>, uuuuh.
This description usually includes a small welcome message of [Host Inc](/#host)!
Like a sponsor message in a podcast, but less annoying.\n\n
Then the host has a paragraph to explain what they are and why they are cool
Of course, it’s not only promotion, we are also interested in our hosts.\n\n
If there is anything special to note, this will be mentioned here.`,
  image:
    'https://secure-content.meetupstatic.com/images/classic-events/482175780/800x450.jpg',
  link: 'https://meetup.com/react-cologne/',
  venue: {
    name: 'Host Inc GmbH UG',
    address: 'Hoststraße 420',
    geoLat: 51,
    geoLong: 7,
  },
}
