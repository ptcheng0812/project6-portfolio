import CompsLayoutsNavbar from '@/components/layouts/Navbar'
import CompsLayoutFooter from '@/components/layouts/Footer'

export default function CompLayout({ children }) {
  return (
    <div id="comps-layout">
      <CompsLayoutsNavbar />
      {children}
      {/* <CompsLayoutFooter /> */}
    </div>
  )
}
