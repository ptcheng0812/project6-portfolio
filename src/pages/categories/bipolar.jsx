import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsThreadsCreate from '@/components/modals/threads/create'

import useThreads from '@/_hooks/threads'
import usePublicUsers from '@/_hooks/publicUsers'

export default function PagesCategoriesDepression() {
  const [openThreadsCreate, setThreadsCreate] = useState(false)
  const [page, setPage] = useState(1)
  const category = 'Bipolar'

  const { threads, createThread, meta } = useThreads(page, category)
  const { users } = usePublicUsers()

  const arrayTotalPages = Array.from({ length: meta?.totalPages }, (_, i) => i + 1)

  console.log('>>>>>>meta', meta)
  console.log('>>>>>>page', page)
  console.log('>>>>>>>', arrayTotalPages)
  console.log('>>>>>>>>>>>>All the Users', users)

  return (
    <CompsLayout>
      <div id="pages-categories-header" className="card pages-categories-show text-center">
        <h1>Bipolar</h1>
        <div className="d-flex justify-content-center" id="pages-categories-header-btn-container">
          <button
            className="btn btn-primary btn-sm"
            id="pages-categories-header-btn"
            type="button"
            onClick={() => setThreadsCreate(true)}
          >New Thread</button>
        </div>
      </div>

      <main id="threads-main-group" className="d-flex justify-content-center">
        <List id="threads-main-group" sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
          {
            threads?.map((thread) => (
              thread.category === 'Bipolar'
              && (
                <div className="card">
                  <ListItem alignItems="flex-start" className="d-flex flex-column">
                    <ListItemAvatar className="d-flex justify-content-center align-items-center">
                      <Avatar alt="avatar" src={users?.find(({ id }) => id === thread.UserId)?.avatar} />
                      <a href={`/users/${users?.find(({ id }) => id === thread.UserId)?.id}`} id="pages-threads-show-posts-card-card-title-avatar-name">{ users?.find(({ id }) => id === thread.UserId)?.name }</a>
                    </ListItemAvatar>
                    <ListItemText className="d-flex flex-column">
                      <p>{thread.title}</p>
                      <span><i className="far fa-comment-alt" />  {thread?.Posts?.length}</span>
                      <a href={`/threads/${thread.id}`} id="pages-threads-show-posts-card-card-link">
                        View Posts
                      </a>
                    </ListItemText>
                  </ListItem>
                </div>
              )
            ))
          }
        </List>
      </main>

      <div id="pages-categories-page-btn" className="d-flex justify-content-around">
        {
            page > 1 && <button type="button" id="pages-categories-page-btn-btn" className="btn btn-info btn-sm btn-spacing" onClick={() => setPage(page - 1)}>Previous</button>
          }
        {
            arrayTotalPages?.map((index) => (
              <button type="button" id="pages-categories-page-btn-btn" className="btn btn-info btn-sm" onClick={() => setPage(index)}> {index} </button>
            ))
        }
        {
            true && arrayTotalPages.includes(page) && <button type="button" id="pages-categories-page-btn-btn" className="btn btn-info btn-sm" onClick={() => setPage(page + 1)}>Next</button>
          }
      </div>

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
