import { useState } from 'react'
import Link from 'next/link'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsThreadsUpdate from '@/components/modals/threads/update'

import useUser from '@/_hooks/user'
import useMyThreads from '@/_hooks/myThreads'
import useThread from '@/_hooks/thread'

export default function PagesMyThreads() {
  const [openMyThreadsUpdate, setOpenMyThreadsUpdate] = useState(false)
  const [selectedMyThread, setSelectedMyThread] = useState({})

  const { currentUser } = useUser()
  const { myThreads } = useMyThreads()
  const { updateThread, destroyThread } = useThread(selectedMyThread.id)

  console.log('>>>>>>>currentUser', currentUser)
  console.log('>>>>>>>myThreads', myThreads)
  console.log('>>>>>>>selectedMyThread', selectedMyThread)

  return (
    <CompsLayout>
      <div id="pages-my-threads" className="text-center">
        <h1>My Threads</h1>
        {
          myThreads?.map((myThread) => (
            <>
              <div key={myThread.id} className="card col-sm-1 col-md-4 col-lg-6">
                <div className="card-body">
                  <div className="card-title">
                    {myThread.title}
                  </div>
                  <div className="card-text d-flex flex-column">
                    category: {myThread.category}
                    <Link href={`/threads/${myThread.id}`}>View Thread</Link>
                    <div className="btn-container d-flex justify-content-around">
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => {
                          setSelectedMyThread(myThread)
                          setOpenMyThreadsUpdate(true)
                        }}
                      >Edit My Thread</button>
                      <button
                        className="btn btn-danger btn-sm"
                        type="button"
                        onClick={() => {
                          setSelectedMyThread(myThread)
                          destroyThread(myThread)
                        }}
                      >Delete My Thread</button>
                    </div>
                  </div>
                </div>
              </div>
              <CompsModalsThreadsUpdate
                show={openMyThreadsUpdate}
                initialValues={selectedMyThread}
                handleClose={() => setOpenMyThreadsUpdate(false)}
                handleSubmit={(values) => {
                  updateThread(values).then(() => {
                    setOpenMyThreadsUpdate(false)
                  })
                }}
              />
            </>
          ))
        }
      </div>

    </CompsLayout>
  )
}
