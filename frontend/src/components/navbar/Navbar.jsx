import { Disclosure } from '@headlessui/react'
import { useLocation } from 'react-router-dom'
import NavLogo from './NavLogo'
import DesktopNavMenu from './DesktopNavMenu'
import NavHamburgerButton from './NavHamburgerButton'
import MobileNavMenu from './MobileNavMenu'
import LogInButton from './LogInButton'
import LogOutButton from './LogOutButton'
import facade from '../../facade/ApiFacade'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
]

export default function Example() {
  navigation.map((item) => {
    if (item.href === useLocation().pathname) {
      item.current = true
    } else {
      item.current = false
    }
  })

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <NavLogo />
                <DesktopNavMenu navigation={navigation} />
              </div>
              {facade.loggedIn() ? <LogOutButton /> : <LogInButton />}
              <NavHamburgerButton open={open} />
            </div>
          </div>

          <MobileNavMenu open={open} navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}
