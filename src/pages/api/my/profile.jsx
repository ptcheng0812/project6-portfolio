import nc from 'next-connect'

import myProfileShow from '@/api/controllers/my/profile/show'
import myProfileUpdate from '@/api/controllers/my/profile/update'

export const config = {
  api: {
    bodyParser: false
  }
}

export default nc()
  .get(myProfileShow)
  .put(myProfileUpdate)
