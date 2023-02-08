import LoginButton from './LoginButton'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='flex items-center justify-center gap-10'>
      <LoginButton />
      <Link href='/' className='text-5xl font-bold'>
        ilovecold.beer
      </Link>
      <ThemeToggler />
    </header>
  )
}
