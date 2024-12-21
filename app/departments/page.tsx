import React from 'react'
import { Metadata } from 'next'
import Branches from '@/pages/departments/Branches';

export const metadata: Metadata = {
  title: "Departments - Shridevi City Hospital",
  description: "Shridevi City Hospital, Tumkur",
};

function Departments() {
  return (
    <Branches />
  )
}

export default Departments