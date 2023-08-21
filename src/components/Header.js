import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: '젠더에듀상담센터', to: '/', current: true },
  { name: '센터소개', to: '/about', current: false },
  {
    name: '교육프로그램',
    to: '/eduprogram',
    current: false,
  },
  {
    name: '치유프로그램',
    to: '/healingprogram',
    current: false,
  },
  {
    name: '교육활동가양성',
    to: '/training',
    current: false,
  },
  {
    name: '교육및상담신청',
    to: '/counseling',
    current: false,
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Header() {
  return (
    <Disclosure as="nav" className="flex-wrap">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <div className="font-ibmsans text-black text-lg ml-2 bold flex space-x-1 md:hidden">
                    <Link to="/">젠더에듀상담센터</Link>
                  </div>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-1 text-sm lg:text-base">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={process.env.PUBLIC_URL + item.to}
                  className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
