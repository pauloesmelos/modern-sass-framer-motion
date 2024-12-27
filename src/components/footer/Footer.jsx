import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pt-36 py-16">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">
              About Us
            </h3>
            <p className="text-neutral-400 max-w-[80%]">
              The virtual support system has allowed us to scale efficiently, more about us here.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">
              Customer Service
            </h3>
            <ul className="text-neutral-400 flex flex-col gap-2">
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">Contact Us</a>
              </li>
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">FAQs</a>
              </li>
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">Returns</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">
              Follow Us
            </h3>
            <ul className="text-neutral-400 flex flex-col gap-2">
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a className="hover:text-purple-600 duration-200" href="#" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Newsletter</h3>
            <p className="text-neutral-400">
              Sign up to get the latest news and updates.
            </p>
            <div className="w-full mt-2 flex flex-col gap-2">
              <input 
                className="p-2 border-2 bg-white rounded-md outline-none focus:border-purple-600" 
                type="email" 
                placeholder="Your email address"
              />
              <button className="bg-neutral-800 text-white rounded-md py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;