import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full bg-slate-800 text-white absolute  py-10 px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="flex items-center text-2xl font-bold mb-2">
            <span className="mr-2"><i class="fa-solid fa-truck-ramp-box me-1"></i></span>Cartico
            </h2>
          <p className="text-sm leading-relaxed">
            Designed and built with all the love in the world by the Luminar team with the help of our contributors. <br />
            Code licensed Luminar, docs CC BY 3.0. <br />
            Currently v5.3.2.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Landing Page</Link></li>
            <li><Link to="/home">Home Page</Link></li>
            <li><Link to="/history">Watch History Page</Link></li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">React</a></li>
            <li><a href="#">React Bootstrap</a></li>
            <li><a href="#">React Router</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 rounded-l-md w-full text-slate-800 bg-white"
            />
            <button className="bg-white text-slate-600 px-3 py-2 rounded-r-md">➔</button>
          </div>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm mt-10 border-t border-slate-400 pt-4">
        Copyright © May 2025 Batch, Daily Cart. Built with React Redux.
      </div>
    </div>
  )
}

export default Footer