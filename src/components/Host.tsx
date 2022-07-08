import { Container } from '@/components/Container'

export function Host() {
  return (
    <section id="host" className="relative pt-12">
      <Container className="relative z-10">
        <div>
          <div className="prose-xl mx-auto text-blue-900 prose-a:text-[color:#fa45ac] sm:prose-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display font-medium tracking-tighter text-blue-600 sm:text-5xl">
              You want to host a React.Cologne meetup?
            </h2>
            <div className="font-display tracking-tight">
              <p>
                We invite everyone in our community to host an event.
                React.Cologne is a community meetup and not run by a single
                company. Our hosts sponsor the meetup by providing a suitable
                location, free drinks and snacks for their event.
              </p>
              <p>
                We require future hosts to attend at least one previous meetup
                event. We do this to make sure that they see how a React.Cologne
                meetup is usually run, and to ensure that companies are invested
                into our community beyond just a single event.
              </p>
              <p>
                We have around 35-50 participants and need room for 2 parallel
                sessions, so your location should be suitable for it. Your
                location should also be accessible from central Cologne with
                public transport.
              </p>
              <p>
                If you’re interested in hosting a React.Cologne meetup,{' '}
                <a href="#join">join us on Slack</a>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
