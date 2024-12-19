'use client';

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useState, useCallback } from 'react';
import { menu } from './Menu';
import Mini from './Mini';
import Appointmentbutton from '../Props/Appointmentbutton';

const Navbar = ({ toggleDrawer }: { toggleDrawer: () => void }) => (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <button
        className="btn btn-ghost lg:hidden"
        onClick={toggleDrawer}
        aria-label="Open Sidebar"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <a href='/' className="btn btn-ghost btnprops text-lg uppercase text-emerald-600">Shridevi City Hospital</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="navbar-end hidden lg:flex">
      <Appointmentbutton />
    </div>
  </div>
);

const Drawer = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => (
  <div
    className={`fixed inset-0 z-50 flex transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    aria-hidden={!isOpen}
  >
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={closeDrawer}
        role="button"
        aria-label="Close Sidebar"
      />
    )}

    <div onClick={closeDrawer}
      className={`bg-base-200 text-base-content min-h-full w-full p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <button
        className="btn btn-sm btn-ghost mb-4 "
        aria-label="Close Drawer"
        onClick={closeDrawer}
      >
        Close
      </button>
      <ul className="menu text-2xl">
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Navigate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Mini />
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
    </>
  );
};

export default Navigate;
