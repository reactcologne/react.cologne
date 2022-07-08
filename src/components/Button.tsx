import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import * as React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode
}

export function Button({
  className,
  ...props
}: Props & JSX.IntrinsicElements['button']) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#F945AC] p-4 text-base font-semibold text-white hover:bg-[#F231A0] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F231A0] active:text-white/70',
    className
  )

  return <button className={className} {...props} />
}

Button.Link = ({ className, href, ...props }: Props & LinkProps) => {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#F945AC] p-4 text-base font-semibold text-white hover:bg-[#F231A0] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F231A0] active:text-white/70',
    className
  )

  return <Link href={href} className={className} {...props} />
}

Button.ExternalLink = ({
  className,
  href,
  ...props
}: Props & JSX.IntrinsicElements['a']) => {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#F945AC] p-4 text-base font-semibold text-white hover:bg-[#F231A0] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F231A0] active:text-white/70',
    className
  )

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
      {...props}
    />
  )
}
