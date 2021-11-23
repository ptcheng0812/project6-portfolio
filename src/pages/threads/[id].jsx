import { useState } from 'react'
import { useRouter } from 'next/router'

import useThread from '@/_hooks/thread'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsThreadsUpdate from '@/components/modals/threads/update'

export default function PagesThreadShow() {
  const [openThreadsUpdate, setOpenThreadsUpdate] = useState(false)
  const { query: { id } } = useRouter()

  const { thread, updateThread, destroyThread } = useThread(id)

  console.log('>>>>>>>>>', thread)

  return (
    <CompsLayout>
      <div id="pages-categories-index" className="text-center">
        <h1>Thread {thread?.id}</h1>
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => setOpenThreadsUpdate(true)}
          >Edit</button>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => destroyThread()}
          >Delete</button>
        </div>
      </div>

      <CompsModalsThreadsUpdate
        show={openThreadsUpdate}
        initialValues={thread}
        handleClose={() => setOpenThreadsUpdate(false)}
        handleSubmit={(values) => {
          updateThread(values).then(() => {
            setOpenThreadsUpdate(false)
          })
        }}
      />

    </CompsLayout>
  )
}
