import React from 'react'
import { Metadata } from 'next'
import Form from '@/pages/contact/Form';

export const metadata: Metadata = {
  title: "Contact - Shridevi City Hospital",
  description: "Get in touch with us",
};

function Contact() {
  return (
    <>
      <Form />
    </>
  )
}

export default Contact