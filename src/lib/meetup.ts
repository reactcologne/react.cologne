import * as cheerio from 'cheerio'
import showdown from 'showdown'

export type NextEvent = {
  title: string
  startDate: string
  startDateFullText: string
  startDateText: string
  startTimeText: string
  description: string
  image?: string
  link: string
  venue: {
    name: string
    address: string
    geoLat: number
    geoLong: number
  }
}

export async function scrapeNextMeetupEvent() {
  const res = await fetch('https://meetup.com/react-cologne/', {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36', // yes yes it's me chrome on macOS
    },
  })
  const html = await res.text()
  const $ = cheerio.load(html)

  const apolloState = $('script')
    .filter(
      (_i, el) => $(el).text().trim().includes('window.__APOLLO_STATE__={"') // i'm in danger
    )
    .text()
    .replace('window.__APOLLO_STATE__=', '')

  if (!apolloState) {
    // no apollo state? either temporarily blocked or meetup changed their site. yikes!
    return undefined
  }

  const data: Record<string, any> = JSON.parse(apolloState)

  const eventData = Object.values(data).filter(
    (obj) => obj['__typename'] === 'Event'
  )[0]

  if (!eventData) {
    return undefined
  }

  const mdConverter = new showdown.Converter()

  const venue = data[eventData.venue.id]
  const image = data[eventData.images[0].id]

  const event: NextEvent = {
    title: eventData.title,
    startDate: eventData.dateTime,
    startDateFullText: new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'Europe/Berlin',
    }).format(new Date(eventData.dateTime)),
    startDateText: new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      timeZone: 'Europe/Berlin',
    }).format(new Date(eventData.dateTime)),
    startTimeText: new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'Europe/Berlin',
    }).format(new Date(eventData.dateTime)),
    description: mdConverter.makeHtml(
      eventData.description.split('\\-\\-\\-')[0]
    ),
    image: image
      ? image.baseUrl.concat(image.id).concat('/800x450.jpg')
      : undefined,
    link: 'https://meetup.com/react-cologne/events/'.concat(eventData.id),
    venue: {
      name: venue.name,
      address: venue.address,
      geoLat: venue.lat,
      geoLong: venue.lng,
    },
  }

  return event
}
