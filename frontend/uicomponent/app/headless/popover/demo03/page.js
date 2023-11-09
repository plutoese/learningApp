"use client";

import { Popover, Transition } from "@headlessui/react";
import { Avatar, AvatarIcon } from "@nextui-org/react";
import { Fragment } from "react";

const solutions = [
  {
    name: "我的数据",
    href: "##",
    icon: IconOne,
  },
  {
    name: "我的收藏",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "我的报告",
    href: "##",
    icon: IconFour,
  },
];

export default function UserNavbar() {
  return (
    <div className="top-16 w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <Avatar
                icon={<AvatarIcon />}
                classNames={{
                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                  icon: "text-black/80",
                }}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute lg:-left-8 z-10 grid grid-flow-col auto-cols-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-900">
                          登出
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

function IconFour() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M242 280.3c-12.9 0-19.2-10.1-23.8-17.4-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4c-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4C77.9 256 75.7 253 72 253c-4.4 0-8-3.6-8-8s3.6-8 8-8c12.9 0 19.2 10.1 23.8 17.4 4.3 6.9 6.5 9.9 10.2 9.9s5.9-3 10.2-9.9C120.7 247 127 237 140 237s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 3.7 0 5.9-3 10.2-9.9C188.8 247 195 237 208 237s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 4.4 0 8 3.6 8 8s-3.6 8-8 8zM263.9 230.3c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2s7.5-3 12.7-10.2c5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8z"
          fill="#9A2D2F"
        ></path>
        <path
          d="M352 104.7m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
          fill="#FFEB4D"
        ></path>
        <path
          d="M352 144.7c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z"
          fill="#9A2D2F"
        ></path>
        <path d="M368.9 234.7h320v204h-320z" fill="#C2F2FF"></path>
        <path d="M547.4 287.2L410.2 438.7h246.1z" fill="#FFACC2"></path>
        <path d="M623.9 484.7h-255l150.4-166z" fill="#DAE5FF"></path>
        <path
          d="M590.1 347.1l-40.2-9.9-52 5.2 49.5-54.6z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M477.8 364.5l22.8 16.7 18.6-14 41.3 16.9-41.2-65.3z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M439.9 311.7c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24z m0-32c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
          fill="#9A2D2F"
        ></path>
        <path
          d="M439.9 287.7m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z"
          fill="#FFEB4D"
        ></path>
        <path
          d="M800.9 950.7h-576c-17.6 0-32-14.4-32-32v-448c0-17.6 14.4-32 32-32h576c17.6 0 32 14.4 32 32v448c0 17.6-14.4 32-32 32z"
          fill="#FFACC2"
        ></path>
        <path
          d="M800.9 950.7h-576c-17.6 0-32-14.4-32-32v-96h640v96c0 17.6-14.4 32-32 32z"
          fill="#FFEB4D"
        ></path>
        <path
          d="M512.9 695.7m-193 0a193 193 0 1 0 386 0 193 193 0 1 0-386 0Z"
          fill="#DAE5FF"
        ></path>
        <path
          d="M512.9 695.7m-144 0a144 144 0 1 0 288 0 144 144 0 1 0-288 0Z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M311.9 539.7h-58c-8.8 0-16-7.2-16-16s7.2-16 16-16h58c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M516.3 695.5m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
          fill="#FFC0F0"
        ></path>
        <path
          d="M512.9 847.7c83.8 0 152-68.2 152-152s-68.2-152-152-152-152 68.2-152 152 68.2 152 152 152z m0-288c75 0 136 61 136 136s-61 136-136 136-136-61-136-136 61-136 136-136zM311.9 499.7h-58c-13.2 0-24 10.8-24 24s10.8 24 24 24h58c13.2 0 24-10.8 24-24 0-13.3-10.7-24-24-24z m0 32h-58c-4.4 0-8-3.6-8-8s3.6-8 8-8h58c4.4 0 8 3.6 8 8s-3.6 8-8 8z"
          fill="#9A2D2F"
        ></path>
        <path
          d="M516.3 751.5c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56 25.1 56 56 56z m0-96c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
          fill="#9A2D2F"
        ></path>
        <path
          d="M951 686.3c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-4.4-6.2-10.2-14.5-20.6-16.5v-33c2.3 1.6 4.5 4.4 7.5 8.7 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.6-8-8-8c-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-4.4-6.2-10.2-14.5-20.6-16.5V470.7c0-22.1-17.9-40-40-40h-104v-196c0-4.4-3.6-8-8-8h-320c-4.4 0-8 3.6-8 8v196h-136c-22.1 0-40 17.9-40 40v448c0 9 3 17.3 8 24h-91.6c-4.4 0-8 3.6-8 8s3.6 8 8 8h824c4.4 0 8-3.6 8-8s-3.6-8-8-8h-92.4c5-6.7 8-15 8-24V676.5c2.3 1.6 4.5 4.4 7.5 8.7 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 4.4 0 8-3.6 8-8s-3.4-7.9-7.8-7.9zM376.9 242.7h304v188h-20.6L553.9 282.5c-1.4-2-3.6-3.2-6-3.3-2.4-0.1-4.8 0.8-6.4 2.6L406.6 430.7h-29.7v-188z m162.4 122.7l1.2 1.8-18.2-7.4c-2.6-1.1-5.6-0.7-7.8 1l-13.8 10.4-10.8-7.9 12-13.3 16.4-18.1 9.8 15.5 11.2 18z m-10-45.8l17.4-19.2 24.2 33.6-19.1-4.7c-0.6-0.2-1.3-0.2-1.9-0.2h-0.8l-12.9 1.3-6.9-10.8z m-33.4 68c2.8 2.1 6.7 2.1 9.5-0.1l14.9-11.3 34.7 14.2 25.3 40.2H428.6l50.2-55.5 17.1 12.5z m71.5-7.6c0-0.1-0.1-0.2-0.1-0.2l-14.7-23.2-6.9-11 3.6-0.4 36.4 9 54.9 76.4h-41.3L567.4 380z m257.5 538.7c0 13.2-10.7 24-24 24h-576c-13.2 0-24-10.8-24-24v-88h163.2c36.8 40.5 89.9 66 148.8 66s112-25.5 148.8-66h163.2v88z m-497-223c0-102 83-185 185-185s185 83 185 185-83 185-185 185-185-83-185-185z m497 119H674.8c24.6-33.3 39.1-74.5 39.1-119 0-110.8-90.2-201-201-201s-201 90.2-201 201c0 44.5 14.5 85.7 39.1 119H200.9v-344c0-13.2 10.8-24 24-24h576c13.2 0 24 10.8 24 24v344z"
          fill="#9A2D2F"
        ></path>
        <path
          d="M200.9 565.1c5.8-1.4 10.9-3.1 15-5.4 11.2-6.3 16.7-13.3 19.8-20.4-3.6-4.2-5.8-9.7-5.8-15.6 0-12.1 9.1-22.2 20.8-23.8 8.4-7.9 24.1-14.3 55.2-18 58.1-6.9 69.4-24.8 70.8-35.3H224.9c-13.2 0-24 10.8-24 24v94.5z"
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  );
}
