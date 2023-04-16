import { Link } from 'react-router-dom'
import facade from '../../facade/ApiFacade'

export default function LogOutButton() {
  const logout = () => {
    facade.logout()
  }

  return (
    <div className='hidden sm:ml-6 sm:block flex gap-2 text-white'>
      <Link to='/' onClick={logout} className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'>
        Log ud
      </Link>
    </div>
  )
}
