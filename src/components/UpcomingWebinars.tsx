"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


export const webinars = [
  {
    title: "Harmonizing with Payment Systems",
    description:
      "“Music can change the world because it can change people.” – Bono. Join Stripe experts to learn about the technology behind payment gateways and how they can harmonize with your business.",
    link: "https://stripe.com/webinars/harmonizing-payment-systems",
  },
  {
    title: "The Symphony of Streaming Services",
    description:
      "“Where words fail, music speaks.” – Hans Christian Andersen. A comprehensive webinar by Netflix exploring the latest trends and future directions of streaming services.",
    link: "https://netflix.com/webinars/symphony-of-streaming",
  },
  {
    title: "Orchestrating Google's Ecosystem",
    description:
      "“Music is the universal language of mankind.” – Henry Wadsworth Longfellow. Navigate the vast array of services and products offered by Google to orchestrate success for your business.",
    link: "https://google.com/webinars/orchestrating-google-ecosystem",
  },
  {
    title: "Connecting Through Meta's Melody",
    description:
      "“Without music, life would be a mistake.” – Friedrich Nietzsche. Meta's experts discuss strategies and tools for building online communities that resonate with harmony.",
    link: "https://meta.com/webinars/connecting-melody",
  },
  {
    title: "Amazon's E-commerce Crescendo",
    description:
      "“One good thing about music, when it hits you, you feel no pain.” – Bob Marley. Discover the future of e-commerce with Amazon's leaders, exploring innovations in technology and AI.",
    link: "https://amazon.com/webinars/ecommerce-crescendo",
  },
  {
    title: "Innovative Harmonies with Microsoft",
    description:
      "“Music expresses that which cannot be put into words and that which cannot remain silent.” – Victor Hugo. Delve into Microsoft's latest developments in software and electronics.",
    link: "https://microsoft.com/webinars/innovative-harmonies",
  },
];


function UpcomingWebinars() {
  return (
    <div className='py-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-amber-500 font-semibold tracking-wide'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sky-300 sm:text-4xl'>Enhance Your Musical Journey!!</p>
            </div>
            <div className='mt-10 max-w-5xl mx-auto px-8'><HoverEffect items={webinars}/></div>
            <div className='mt-10 text-center'>
                <Link href={"/webinars"} className='px-4 py-2 rounded border border-lime-100 text-gray-800 bg-white hover:bg-amber-200 transition duration-200"'>View Webinars</Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars