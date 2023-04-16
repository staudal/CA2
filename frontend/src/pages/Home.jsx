import facade from '../facade/ApiFacade'
import { useState, useEffect } from 'react'

export default function Home() {
  const [adminData, setAdminData] = useState('Loading...')
  const [userData, setUserData] = useState('Loading...')

  const loggedIn = facade.loggedIn()

  useEffect(() => {
    if (loggedIn) {
      facade.fetchAdminData().then((data) => {
        setAdminData(data.message)
      })
      facade.fetchUserData().then((data) => {
        setUserData(data.message)
      })
    }
  }, [loggedIn])

  if (!loggedIn) {
    return <div>Not logged in</div>
  } else {
    return (
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <h1 className='text-4xl font-bold mb-2'>Admin</h1>
          <p className='text-xl'>{adminData}</p>
        </div>
        <div className='col-span-1'>
          <h1 className='text-4xl font-bold mb-2'>User</h1>
          <p className='text-xl'>{userData}</p>
        </div>
      </div>
    )
  }
}
