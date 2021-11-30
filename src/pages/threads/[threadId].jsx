import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import useThread from '@/_hooks/thread'
import useUser from '@/_hooks/user'
import useFavourites from '@/_hooks/favourites'
import usePublicUsers from '@/_hooks/publicUsers'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsThreadsUpdate from '@/components/modals/threads/update'
import CompsModalsPostsCreate from '@/components/modals/posts/create'
import CompsModalsPostsUpdate from '@/components/modals/posts/update'

export default function PagesThreadShow() {
  const [openThreadsUpdate, setOpenThreadsUpdate] = useState(false)
  const [openPostsCreate, setOpenPostsCreate] = useState(false)
  const [openPostsUpdate, setOpenPostsUpdate] = useState(false)
  const [selectedPost, setSelectedPost] = useState({})
  const { query: { threadId } } = useRouter()

  const { thread, postsIds, updateThread, destroyThread, createPost, updatePost, destroyPost } = useThread(threadId)
  const { currentUser } = useUser()
  const { users } = usePublicUsers()
  const { favourites, createFavourite, destroyFavourite } = useFavourites()
  const myFavouritesPostsIds = favourites?.map((favourite) => favourite.PostId)

  console.log('>>>>>>>>>thread', thread)
  console.log('>>>>>>>>thread.Posts>', thread?.Posts)
  console.log('>>>>>>>>>>currentUser', currentUser)
  console.log('>>>>>>>>>>favourites', favourites)
  console.log('>>>>>>>>>>>myFavouritesPostsIds', myFavouritesPostsIds)
  console.log('>>>>>>>>>>>>All the Users', users)

  return (
    <CompsLayout>
      <div id="pages-categories-index" className="text-center">
        <h1>Thread {thread?.id}</h1>
        <h3> {thread?.title} </h3>
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => setOpenThreadsUpdate(true)}
          >Edit</button>
          <button
            className="btn btn-success btn-sm"
            type="button"
            onClick={() => setOpenPostsCreate(true)}
          >New Post</button>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => destroyThread()}
          >Delete</button>
        </div>
      </div>

      <main id="thread-main-group" className="thread-main-group text-center">
        {
          thread?.Posts?.map((post) => (
            <>
              <div key={post.id}>
                <div>
                  {
                    users?.find(({ id }) => id === post.UserId)?.name
                  }
                  <Link href={`/users/${users?.find(({ id }) => id === post.UserId)?.id}`}>View User Profile</Link>
                </div>
                <a>{post?.content}</a>
              </div>
              {post?.UserId === currentUser?.id
                && (
                <div className="btn-container d-flex justify-content-around">
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    onClick={() => {
                      setSelectedPost(post)
                      setOpenPostsUpdate(true)
                    }}
                  >Edit Post</button>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    disabled={postsIds.includes(post.id)}
                    onClick={() => {
                      destroyPost(post)
                    }}
                  >Delete Post</button>
                </div>
                )}
              {myFavouritesPostsIds?.includes(post.id)
                && (
                  <button
                    className="btn btn-info btn-sm"
                    type="button"
                    onClick={() => {
                      destroyFavourite(post)
                    }}
                  >Marked</button>
                )}
              {!myFavouritesPostsIds?.includes(post.id)
                && (
                  <button
                    className="btn btn-info btn-sm"
                    type="button"
                    onClick={() => {
                      createFavourite(post)
                    }}
                  >Mark as Favourite</button>
                )}
            </>
          ))
        }
      </main>

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

      <CompsModalsPostsCreate
        show={openPostsCreate}
        handleClose={() => setOpenPostsCreate(false)}
        handleSubmit={(values) => {
          createPost(values).then(() => {
            setOpenPostsCreate(false)
          })
        }}
      />

      <CompsModalsPostsUpdate
        show={openPostsUpdate}
        initialValues={selectedPost}
        handleClose={() => setOpenPostsUpdate(false)}
        handleSubmit={(values) => {
          updatePost(values).then(() => {
            setOpenPostsUpdate(false)
          })
        }}
      />

    </CompsLayout>
  )
}
