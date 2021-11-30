import Link from 'next/link'
import { useState } from 'react'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsPostsUpdate from '@/components/modals/posts/update'

import useMyPosts from '@/_hooks/myPosts'
import useThread from '@/_hooks/thread'
import useThreads from '@/_hooks/threads'

export default function PagesMyPosts() {
  const [openMyPostsUpdate, setOpenMyPostsUpdate] = useState(false)
  const [selectedMyPost, setSelectedMyPost] = useState({})

  const { myPosts } = useMyPosts()
  const { threads } = useThreads()
  const threadsIds = threads?.map((thread) => thread.id)
  const { updatePost, destroyPost } = useThread(selectedMyPost.ThreadId)

  console.log('>>>>>>>myPosts', myPosts)
  console.log('>>>>>>selectedMyPost', selectedMyPost)
  console.log('>>>>>>>All the threads', threads)
  console.log('>>>>>>>>threadsIds', threadsIds)

  return (
    <CompsLayout>
      <div id="pages-my-posts" className="text-center">
        <h1>My Posts</h1>
        {
          myPosts?.map((myPost) => (

            threadsIds.includes(myPost.ThreadId) && (
            <>
              <div key={myPost.id} className="card col-sm-1 col-md-4 col-lg-6">
                <div className="card-body">
                  <div className="card-title">
                    {myPost.content}
                  </div>
                  <div className="card-text d-flex flex-column">
                    <Link href={`/threads/${myPost.ThreadId}`}>View Parent Thread</Link>
                    <div className="btn-container d-flex justify-content-around">
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => {
                          setSelectedMyPost(myPost)
                          setOpenMyPostsUpdate(true)
                        }}
                      >Edit My Post</button>
                      <button
                        className="btn btn-danger btn-sm"
                        type="button"
                        onClick={() => {
                          setSelectedMyPost(myPost)
                          destroyPost(selectedMyPost)
                        }}
                      >Delete My Post</button>
                    </div>
                  </div>
                </div>
              </div>

              <CompsModalsPostsUpdate
                show={openMyPostsUpdate}
                initialValues={selectedMyPost}
                handleClose={() => setOpenMyPostsUpdate(false)}
                handleSubmit={(values) => {
                  updatePost(values).then(() => {
                    setOpenMyPostsUpdate(false)
                  })
                }}
              />
            </>
            )

          ))
        }
      </div>
    </CompsLayout>
  )
}
