import nc from 'next-connect'

import myProfileShow from '@/api/controllers/my/profile/show'
import myProfileUpdate from '@/api/controllers/my/profile/update'

export default nc()
  .get(myProfileShow)
  .put(myProfileUpdate)
