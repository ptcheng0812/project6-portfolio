import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

import CompsLayout from '@/components/layouts/Layout'

import useUser from '@/_hooks/user'
import usePublicUsers from '@/_hooks/publicUsers'
import useFavourites from '@/_hooks/favourites'
import useThreads from '@/_hooks/threads'
import usePosts from '@/_hooks/posts'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2
    }}
    id="pages-my-threads-coloured-line"
  />
)

export default function PagesMyFavourites() {
  const { currentUser } = useUser()
  const { users } = usePublicUsers()
  const { threads } = useThreads()
  const { favourites, destroyFavourite } = useFavourites()
  const { posts } = usePosts()
  const threadsIds = threads?.map((thread) => thread.id)

  console.log('>>>>>>>currentUser', currentUser)
  console.log('>>>>>>>>users', users)
  console.log('>>>>>>>favourites', favourites)
  console.log('>>>>>>>posts', posts)
  console.log('>>>>>>>threads', threads)
  console.log('>>>>>>>threadsIds', threadsIds)

  return (
    <CompsLayout>
      <div id="pages-my-favourites" className="text-center">
        <h1>My Favourites</h1>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} id="pages-my-favourites-main-grid">
          <Grid item xs={4} id="pages-my-favourites-avatar-grid">
            <div className="border rounded d-flex justify-content-center" id="pages-my-favourites-avatar-grid-wrap">
              <div id="pages-my-favourites-avatar">
                <Avatar src={currentUser?.avatar} alt="avatar" sx={{ width: 200, height: 200 }} />
                <Typography variant="h5" gutterBottom component="div" id="pages-my-favourites-avatar-name">
                  {currentUser?.name}
                </Typography>
              </div>
            </div>
            <div className="border rounded d-flex justify-content-center" id="pages-my-favourites-in-pages-nav">
              <CardContent className="d-flex flex-column">
                <Link href="/my/profile">Profile</Link>
                <Link href="/my/threads">My Threads</Link>
                <Link href="/my/posts">My Posts</Link>
                <Link href="/my/notifications">My Notifications</Link>
                <Link href="/my/favourites">My Favourites</Link>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={8} id="pages-my-favourites-grid" className="d-flex justify-content-center">
            <div className="d-flex flex-column " id="pages-my-favourites-grid-inside">
              {
                favourites?.map((favourite) => (
                  <div>
                    {
                      threadsIds?.includes(posts?.find(({ id }) => id === favourite?.PostId)?.ThreadId)
                      && posts?.find(({ id }) => id === favourite?.PostId) && (
                        <div key={favourite.id} className="card d-flex flex-column" id="pages-my-favourites-grid-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start align-items-center" id="pages-my-favourites-grid-card-head">
                              <Avatar src={users?.find(({ id }) => id === (posts?.find(({ id }) => id === favourite?.PostId)?.UserId))?.avatar} alt="avatar" sx={{ width: 50, height: 50 }} />
                              <a href={`/users/${users?.find(({ id }) => id === (posts?.find(({ id }) => id === favourite?.PostId)?.UserId))?.id}`} id="pages-my-favourites-grid-card-head-link">
                                {users?.find(({ id }) => id === (posts?.find(({ id }) => id === favourite?.PostId)?.UserId))?.name}</a>
                            </div>
                            <ColoredLine color="black" />
                            <div className="card-title" id="pages-my-favourites-grid-card-card-title">
                              {
                                posts?.find(({ id }) => id === favourite?.PostId)?.content
                              }
                            </div>
                            <ColoredLine color="black" />
                            <div className="card-text d-flex flex-column">
                              <i className="fas fa-directions">
                                <Link href={`/threads/${posts?.find(({ id }) => id === favourite?.PostId)?.ThreadId}`}>View Parent Thread</Link></i>
                              <button
                                id="remove-favourites-btn"
                                className="btn btn-danger btn-sm"
                                type="button"
                                onClick={() => {
                                  destroyFavourite(posts?.find(({ id }) => id === favourite?.PostId))
                                }}
                              ><i className="fas fa-eraser" />  Remove From Favourite</button>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </div>
          </Grid>
        </Grid>
      </div>
    </CompsLayout>
  )
}
