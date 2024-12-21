import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Appointmentbutton() {
  return (
    <a className="btn themebutton group relative inline-flex items-center border-none">
    <span className="transition-all duration-300 ease-out group-hover:mr-6">Book Appointment</span>
    <CalendarDaysIcon className="size-5  absolute right-0 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:right-3" aria-hidden="true" />
  </a>
  )
}

export default Appointmentbutton