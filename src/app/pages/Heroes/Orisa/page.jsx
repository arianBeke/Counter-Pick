"use client"
import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar/page';

const faqs = [
  {
    question: "What are Orisa's abilities?",
    img1: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8bf67f548fb8dd8fde4dd07ae567e635f8d6229c330a3656134697b9ecbd9140.png",
    img2: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0cf93f55a30fe7ec769c5f2eebd284c92851d6b1dbaca0e2c39eae908a9b35c6.png",
    img3: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d697fa90726cf683222920822d2ee00a85e0420c6cbc6ec2365573f313d06357.png",
    img4: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/804f9775ecfbc3ac2b84514e429cd8bc4e88027b00cb09126880d7f2c7759b59.png",
    img5: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d8892b56df62b068343e5029a2ae1e2fa54f7568febac7141ffa945d02e214c.png",
  }, 
];

const hero = [
  {
    name: 'ORISA',
    role: 'Passive/Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
  },
];
const counters = [
  {
   title: "Who are Orisa's counters?",
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
    descriptionName: 'SOMBRA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png',
    descriptionName: 'TRACER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
    descriptionName: 'REAPER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
    descriptionName: 'WIDOWMAKER',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    descriptionName: 'BASTION',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
    descriptionName: 'GENJI',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
    descriptionName: 'PHARAH',
  },
];
const counters2 = [
  {
   title: "Who does Orisa counter?",
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    descriptionName2: 'WINSTON',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    descriptionName2: 'REINHARDT',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
    descriptionName2: 'LUCIO',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',
    descriptionName2: 'SIGMA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
    descriptionName2: 'MERCY',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
    descriptionName2: 'ZENYATTA',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    descriptionName2: 'ANA',
  },
];
export default function Example() {
  return (
    <div>
      <Navbar />
      <div className=" mt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">ORISA</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid lg:-w-7xl gap-6 lg:mx-0 lg:gap-8"
          >
            {hero.map((hero) => (
              <li key={hero.name} className="rounded-2xl grid grid-cols-2   ring-[#00df9a] ring-4 bg-[#1D2128] px-8 py-10">
                <div className=" pr-52">
                  <img className="mx-auto h-48 w-48 ring-[#00df9a] ring-4 rounded-full md:h-56 md:w-56" src={hero.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{hero.name}</h3>
                  <p className="text-sm leading-6 text-[#00df9a]">{hero.role}</p>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-[#00df9a] inline border-b-3 border-[#00df9a]">ABOUT</h1>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn.
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Role: <span className="text-[#00df9a]">Tank</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Nationality: <span className="text-[#00df9a]" >African</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Birthday: May 9 <span className="text-[#00df9a]" >(Age: 1)</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-7xl divide-y divide-white ">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#00df9a]">Abilities and counters</h2>
            <dl className="mt-10 space-y-6 divide-y divide-white">
              {faqs.map((faq, index) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                      <Disclosure.Panel as="dd" className="mt-2 pr-12 ">
                        <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img1} alt="" />
                            <p className="text-center text-white mt-5">AUGMENTED FUSION DRIVER</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img2} alt="" />
                            <p className="text-center text-white mt-5">ENERGY JAVELIN</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img3} alt="" />
                            <p className="text-center text-white mt-5">FORTIFY</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img4} alt="" />
                            <p className="text-center text-white mt-5">JAVELIN SPIN</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full" src={faq.img5} alt="" />
                            <p className="text-center text-white mt-5">TERRA SURGE</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                    </>
                  )}
                </Disclosure>
              ))}


              <Disclosure key={counters[0].title} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{counters[0].title}</span>
                        <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-7 gap-8">
                        {counters.slice(1).map((counter) => (
                            <div key={counter.descriptionName} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-30 lg:w-30 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full"
                                src={counter.imageUrl2}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counter.descriptionName}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>



              <Disclosure key={counters2[0].title} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{counters2[0].title}</span>
                        <span className="ml-6 flex h-7 items-center text-[#00df9a]">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-7 gap-8">
                        {counters2.slice(1).map((counters2) => (
                            <div key={counters2.descriptionName2} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-30 lg:w-30 bg-[#1D2128] ring-[#00df9a] ring-4 rounded-full"
                                src={counters2.imageUrl3}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counters2.descriptionName2}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}