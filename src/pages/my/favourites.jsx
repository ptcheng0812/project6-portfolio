import Link from 'next/link'
import CompsLayout from '@/components/layouts/Layout'

import useFavourites from '@/_hooks/favourites'
import usePosts from '@/_hooks/posts'

export default function PagesMyFavourites() {
  const { favourites } = useFavourites()
  const { posts } = usePosts()

  console.log('>>>>>>>favourites', favourites)
  console.log('>>>>>>>posts', posts)

  return (
    <CompsLayout>
      <div id="pages--my-favourites" className="text-center">
        <h1>My Favourites</h1>
        {
          favourites?.map((favourite) => (
            <div key={favourite.id} className="d-flex flex-column">
              {
              posts?.find(({ id }) => id === favourite?.PostId)?.content
            }
              <Link href={`/threads/${posts?.find(({ id }) => id === favourite?.PostId)?.ThreadId}`}>View Parent Thread</Link>
            </div>
          ))
        }
      </div>
    </CompsLayout>
  )
}
