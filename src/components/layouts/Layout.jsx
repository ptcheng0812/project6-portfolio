import Head from 'next/head'
import CompsLayoutsNavbar from '@/components/layouts/Navbar'
import CompsLayoutsFooter from '@/components/layouts/Footer'

export default function CompLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <div id="comps-layout">
        <CompsLayoutsNavbar />
        {children}
        <CompsLayoutsFooter />
      </div>
    </>
  )
}
