import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Navbar from '../../../components/Navbar/page';

const faqs = [
  {
    question: "What are D.VA's abilities?",
    img1: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/29bd15ebb32c23483a59df18a79f71301b2128c05b2f8d0c052ab86e0715e07d.png",
    img2: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24074dececa8bf7b57628509e70731916db62b5ab5b30660ac1727b20bbc5b4d.png",
    img3: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89d6beb25b21eacd5a181b96438436692d9ad403fcef19873e506f6d46ed37a3.png",
    img4: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2713a8ef6742f4009da072d66d382eb8ff3dd8e00828deadb5af1a93b0d8ce4b.png",
    img5: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1787326d46d04aa10872fc30fe512ab3575781735110dfb178ff38da352facb7.png",
    img6: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f76e4b710ceb71f2e260029fc8d0ad15b227e3f006ab1b6c0c4e44da98c2d614.png",
    img7: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/848d8cd24eb0327a023a564447d79dd8b367c21a378d328cd92896a21b775219.png",
    img8: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/692a603c9945e600b195d1fd56364979363926f42d950b95c4811e7047e94c97.png",
  }, 
];

const dva = [
  {
    name: 'D.VA',
    role: 'Passive/Aggresive Tank',
    imageUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png',
  },
];
const counters = [
  {
   title: "Who are D.VA's counters?",
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png',
    descriptionName: 'ZARYA',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
    descriptionName: 'GENJI',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
    descriptionName: 'REINHARDT',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
    descriptionName: 'MEI',
  },
  {
    imageUrl2: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png',
    descriptionName: 'SOJURN',
  },
];
const counters2 = [
  {
   title: "Who does D.VA counter?",
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
    descriptionName2: 'WINSTON',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
    descriptionName2: 'WIDOWMAKER',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
    descriptionName2: 'HANZO',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
    descriptionName2: 'BASTION',
  },
  {
    imageUrl3: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
    descriptionName2: 'ASHE',
  },
];
export default function Example() {
  return (
    <div>
      <Navbar />
      <div className=" mt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#00df9a] inline border-b-4 border-[#00df9a] sm:text-6xl">D.VA</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid lg:-w-7xl gap-6 lg:mx-0 lg:gap-8"
          >
            {dva.map((dva) => (
              <li key={dva.name} className="rounded-2xl grid grid-cols-2   ring-[#00df9a] ring-4 bg-gray-800 px-8 py-10">
                <div className=" pr-52">
                  <img className="mx-auto h-48 w-48 ring-[#00df9a] ring-4 rounded-full md:h-56 md:w-56" src={dva.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{dva.name}</h3>
                  <p className="text-sm leading-6 text-[#00df9a]">{dva.role}</p>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-[#00df9a] inline border-b-3 border-[#00df9a]">ABOUT</h1>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Role: <span className="text-[#00df9a]">Tank</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Nationality: <span className="text-[#00df9a]" >Korean</span>
                  </p>
                  <p className="text-white mt-5 font-bold text-[15px]">
                    Birthday: Jun 22 <span className="text-[#00df9a]" >(Age: 21)</span>
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
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <div className=" mt-9 grid grid-cols-1 lg:grid-cols-8 gap-8">
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img1} alt="" />
                            <p className="text-center text-white mt-5">FUSION CANNONS</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img2} alt="" />
                            <p className="text-center text-white mt-5">LIGHT GUN</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img3} alt="" />
                            <p className="text-center text-white mt-5">BOOSTERS</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img4} alt="" />
                            <p className="text-center text-white mt-5">DEFENCE MATRIX</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img5} alt="" />
                            <p className="text-center text-white mt-5">MICRO MISSILES</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img6} alt="" />
                            <p className="text-center text-white mt-5">SELF-DESTRUCT</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img7} alt="" />
                            <p className="text-center text-white mt-5">CALL MECH</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img style={{ objectFit: 'scale-down' }} className="mx-auto lg:h-40 lg:w-28 bg-gray-800  ring-[#00df9a] ring-4 rounded-full" src={faq.img8} alt="" />
                            <p className="text-center text-white mt-5">EJECT!</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
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

                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {counters.slice(1).map((counter) => (
                            <div key={counter.descriptionName} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-40 lg:w-40 bg-gray-800 ring-[#00df9a] ring-4 rounded-full"
                                src={counter.imageUrl2}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counter.descriptionName}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
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
                          {open ?  (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>

                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className=" mt-9 grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {counters2.slice(1).map((counters2) => (
                            <div key={counters2.descriptionName2} className="flex flex-col items-center mt-9">
                              <img
                                className="mx-auto lg:h-40 lg:w-40 bg-gray-800 ring-[#00df9a] ring-4 rounded-full"
                                src={counters2.imageUrl3}
                                alt=""
                              />
                              <p className="text-center text-white mt-5">{counters2.descriptionName2}</p>
                            </div>
                          ))}
                      </div>
                    </Disclosure.Panel>
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