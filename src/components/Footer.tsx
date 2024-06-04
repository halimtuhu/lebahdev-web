'use client'
import { footerLinks } from '@/assets/data'
import { Fragment } from 'react'

import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="border-y border-default-200">
        <div className="container py-20">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-16 xl:grid-cols-5">
            <div className="md:col-span-3 xl:col-span-2">
              <div>
                <Link href="">
                  <Image
                    src={logoDark}
                    height={40}
                    width={147}
                    alt="logo"
                    className="flex h-10 dark:hidden object-scale-down"
                  />
                  <Image
                    src={logoLight}
                    height={40}
                    width={147}
                    alt="logo"
                    className="hidden h-10 dark:flex object-scale-down"
                  />
                </Link>
                <p className="mt-6  text-base">
                  Menghadirkan Era Baru dalam Pengembangan Web bersama LebahDev
                </p>
                <div className="mt-3">
                  <div>Email: musfirati@lebah.dev</div>
                  <div>Whtasapp: +62 822-1302-1513</div>
                </div>
              </div>
            </div>
            {footerLinks.map((item, idx) => {
              return (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="mb-2 font-medium text-default-800 lg:text-lg xl:text-xl">
                      {item.title}
                    </h5>
                    {item.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Fragment key={idx}>
                          {Icon ? (
                            <li className="group flex items-center gap-5">
                              <Link
                                href={`${item.link ? item.link : ""}`}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 text-default-800 transition-all duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                              >
                                <Icon className="h-5 w-5" />
                              </Link>
                              <h5 className="text-base font-medium text-default-800">
                                {item.name}
                              </h5>
                            </li>
                          ) : (
                            <li>
                              <Link
                                href={`${item.link ? item.link : ""}`}
                                className="text-base text-default-700 transition-all hover:text-default-950"
                              >
                                {item.name}
                              </Link>
                            </li>
                          )}
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
          <p className="text-base text-default-900">
            {new Date().getFullYear()} © Lebah Dev. All rights reserved.
          </p>
          {/* <p className="text-base">
            <Link href="">Terms Conditions &amp; Policy</Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer
