import LoginButton from './LoginButton'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='flex items-center justify-center gap-5'>
      <LoginButton />
      <Link href='/' className='text-4xl'>
        ilovecoldbeer
      </Link>
      <ThemeToggler />
    </header>
  )
}
