import Link from 'next/link'
import CompsLayout from '@/components/layouts/Layout'

export default function PagesCategoriesIndex() {
  return (
    <CompsLayout>
      <div id="pages-categories-index">
        <div id="pages-categories-image-area">
          <div id="pages-categories-image-area-image" />
          <div className="d-flex align-items-center" id="pages-categories-image-area-text-area">
            <div className="d-flex flex-column" id="pages-categories-image-area-text-area-container">
              <h3 id="pages-categories-image-area-text-area-text"> Categories</h3>
              <p>Search and discuss your mental health conditions</p>
            </div>
          </div>
        </div>
        <div id="pages-categories-container" className="d-flex justify-content-around" />
        <div className="card-deck row d-flex justify-content-center">
          <div className="card col-sm-4" id="pages-categories-card">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/depression">
                <a>Depression</a>
              </Link></h5>
              <p className="card-text">Depression (major depressive disorder or clinical depression) is a common but serious mood disorder. It causes severe symptoms that affect how you feel, think, and handle daily activities, such as sleeping, eating, or working. To be diagnosed with depression, the symptoms must be present for at least two weeks.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link href="/categories/depression" passHref><button className="btn btn-info btn-sm" type="button"><i className="fas fa-arrow-circle-right" /></button></Link>
            </div>
          </div>
          <div className="card col-sm-4" id="pages-categories-card">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/anxiety">
                <a>Anxiety</a>
              </Link></h5>
              <p className="card-text">Anxiety disorders involve more than temporary worry or fear. For a person with an anxiety disorder, the anxiety does not go away and can get worse over time. The symptoms can interfere with daily activities such as job performance, school work, and relationships. There are several types of anxiety disorders, including generalized anxiety disorder, panic disorder, and various phobia-related disorders.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link href="/categories/anxiety" passHref><button className="btn btn-info btn-sm" type="button"><i className="fas fa-arrow-circle-right" /></button></Link>
            </div>
          </div>
          <div className="card col-sm-4" id="pages-categories-card">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/ptsd">
                <a>PTSD</a>
              </Link></h5>
              <p className="card-text">Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event. Those who continue to experience problems may be diagnosed with PTSD. People who have PTSD may feel stressed or frightened, even when they are not in danger.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link href="/categories/ptsd" passHref><button className="btn btn-info btn-sm" type="button"><i className="fas fa-arrow-circle-right" /></button></Link>
            </div>
          </div>
          <div className="card col-sm-4" id="pages-categories-card">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/bipolar">
                <a>Bipolar</a>
              </Link></h5>
              <p className="card-text">Bipolar disorder (formerly called manic-depressive illness or manic depression) is a mental disorder that causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks. There are three types of bipolar disorder. All three types involve clear changes in mood, energy, and activity levels. These moods range from periods of extremely “up,” elated, irritable, or energized behavior (known as manic episodes) to very “down,” sad, indifferent, or hopeless periods (known as depressive episodes). Less severe manic periods are known as hypomanic episodes.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link href="/categories/bipolar" passHref><button className="btn btn-info btn-sm" type="button"><i className="fas fa-arrow-circle-right" /></button></Link>
            </div>
          </div>
          <div className="card col-sm-4" id="pages-categories-card">
            <div className="card-body">
              <h5 className="card-title"><Link href="/categories/others">
                <a>Other Mental Health Conditions</a>
              </Link></h5>
              <p className="card-text">Other mental health conditions may include Psychosis, Schizophrenia, Dementia, Developmental disorder and Personality disorder, which will not only affect individual attributes such as the ability to manage thoughts, emotions, behaviours and interactions with others, but also social, cultural, economic, political and environmental factors.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link href="/categories/others" passHref><button className="btn btn-info btn-sm" type="button"><i className="fas fa-arrow-circle-right" /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </CompsLayout>
  )
}
