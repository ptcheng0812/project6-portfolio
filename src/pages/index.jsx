import Link from 'next/link'
import Typography from '@mui/material/Typography'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesHome() {
  return (
    <CompsLayout>
      <div id="pages-home">
        <div id="background-img" />
        <Link href="/categories" passHref>
          <button
            className="btn btn btn-outline-primary btn-lg"
            id="pages-home-background-btn"
            type="button"
          ><i className="fas fa-arrow-circle-right" /> Get Started</button>
        </Link>
        <Typography variant="h3" component="div" id="pages-home-text">
          A Place To Connect Your Mentals
        </Typography>
      </div>
    </CompsLayout>
  )
}
