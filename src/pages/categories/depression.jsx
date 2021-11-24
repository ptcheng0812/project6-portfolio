import { useState } from 'react'
import Link from 'next/link'

import CompsLayout from '@/components/layouts/Layout'
import useThreads from '@/_hooks/threads'
import CompsModalsThreadsCreate from '@/components/modals/threads/create'

export default function PagesCategoriesDepression() {
  const [openThreadsCreate, setThreadsCreate] = useState(false)

  const { threads, createThread } = useThreads()

  return (
    <CompsLayout>
      <div id="pages-categories-depression" className="pages-categories-show text-center">
        <h1>Depression</h1>
        <div className="btn-group">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => setThreadsCreate(true)}
          >New Todo</button>
        </div>
      </div>

      <main id="threads-main-group" className="threads-main-group text-center">
        {
          threads?.map((thread) => (
            thread.category === 'Depression'
            && (
            <div key={thread.id}>
              <Link href={`/threads/${thread.id}`}>
                <a>{thread.title}</a>
              </Link>
            </div>
            )

          ))
        }
      </main>

      <CompsModalsThreadsCreate
        show={openThreadsCreate}
        handleClose={() => setThreadsCreate(false)}
        handleSubmit={(values) => {
          createThread(values).then(() => {
            setThreadsCreate(false)
          })
        }}
      />
    </CompsLayout>
  )
}
