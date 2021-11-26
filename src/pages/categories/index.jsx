import Link from 'next/link'
import CompsLayout from '@/components/layouts/Layout'

export default function PagesCategoriesIndex() {
  return (
    <CompsLayout>
      <div id="pages-categories-index">
        <h1>Category</h1>
        <div id="pages-categories-container" className="d-flex justify-content-around" />
        <div className="card-deck row">
          <div className="card col-sm-4">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/depression">
                <a>Depression</a>
              </Link></h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/anxiety">
                <a>Anxiety</a>
              </Link></h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/ptsd">
                <a>PTSD</a>
              </Link></h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/bipolar">
                <a>Bipolar</a>
              </Link></h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card col-sm-4">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/others">
                <a>Other Mental Health Conditions</a>
              </Link></h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </CompsLayout>
  )
}
