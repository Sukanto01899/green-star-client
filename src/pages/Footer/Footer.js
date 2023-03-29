import React from 'react';
import { Link } from 'react-router-dom';
import { DribbleIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '../../assets/icons/icons';

const Footer = () => {
    return (
        <div>
<footer aria-label="Site Footer" className=" dark:bg-dark-main">
  <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <strong
        className="block text-center text-xl font-bold text-universal sm:text-3xl"
      >
        Want us to email you with the latest blockbuster news?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-universal bg-light-main outline-none p-4 pr-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-universal px-5 py-3 text-sm font-medium text-white transition hover:bg-universal-hover"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center  dark:text-light-main text-dark-main dark:text-light-main lg:text-left lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          natus quod eveniet aut perferendis distinctio iusto repudiandae,
          provident velit earum?
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <Link
            className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75"
            to=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

            <FacebookIcon/>
          </Link>

          <Link
            className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75"
            to=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

            <InstagramIcon/>
          </Link>

          <Link
            className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75"
            to=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <TwitterIcon/>
          </Link>

          <Link
            className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75"
            to=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> GitHub </span>

            <GithubIcon/>
          </Link>

          <Link
            className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75"
            to=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Dribbble </span>

            <DribbleIcon/>
          </Link>
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
      >
        <div>
          <strong className="font-medium text-dark-main dark:text-light-main dark:text-light-main"> Services </strong>

          <nav
            aria-label="Footer Services Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            <Link className="text-dark-main dark:text-light-main transition  hover:text-dark-main dark:text-light-main/75" href="/">
              Marketing
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Graphic Design
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              App Development
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Web Development
            </Link>
          </nav>
        </div>

        <div>
          <strong className="font-medium text-dark-main dark:text-light-main"> About </strong>

          <nav
            aria-label="Footer About Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              About
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Careers
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              History
            </Link>
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Our Team
            </Link>
          </nav>
        </div>

        <div>
          <strong className="font-medium text-dark-main dark:text-light-main"> Support </strong>

          <nav
            aria-label="Footer Support Nav"
            className="mt-6 flex flex-col space-y-1"
          >
            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              FAQs
            </Link>

            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Contact
            </Link>

            <Link className="text-dark-main dark:text-light-main transition hover:text-dark-main dark:text-light-main/75" href="/">
              Live Chat
            </Link>
          </nav>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className="text-center text-xs leading-relaxed text-dark-main dark:text-light-main">
        © Company 2022. All rights reserved.

        <br />

        Created with
        <Link
          to=""
          className="text-dark-main dark:text-light-main underline transition hover:text-dark-main dark:text-light-main/75"
          >Laravel</Link>
        and
        <Link
          to=""
          className="text-dark-main dark:text-light-main underline transition hover:text-dark-main dark:text-light-main/75"
          >Laravel Livewire</Link>
      </p>
    </div>
  </div>
</footer>

        </div>
    )
};

export default Footer;