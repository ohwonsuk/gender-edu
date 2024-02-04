import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="md:pl-6 mx-6 py-5 text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2">
            {/* <!-- Tailwind Elements section --> */}
            <div className="">
              <h6 className="mb-3 font-ibmsans text-lg flex items-center justify-center font-semibold uppercase md:justify-start">
                젠더에듀상담센터
              </h6>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                gecc@naver.com
              </p>
              <p className="mb-3 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                010-7111-1644
              </p>
              <p className="mb-3 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                02-6269-0110
              </p>
              <p className="font-ibmsans flex items-center justify-center md:justify-start">
                <img
                  className="size-5 mr-2"
                  src="/clock-solid.svg"
                  alt="clock"
                />
                평일: 오전10:00 ~ 오후05:00
              </p>
              <p className="font-ibmsans text-sm">대표 : 이승은</p>
              <p className="font-ibmsans text-sm">
                사업자등록번호 : 287-20-01792
              </p>
            </div>
          </div>
        </div>
        {/* <!--Copyright section--> */}
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <Link
            className="pl-2 font-ibmsans font-semibold text-neutral-600 dark:text-neutral-400"
            to="/"
          >
            젠더에듀상담센터
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
