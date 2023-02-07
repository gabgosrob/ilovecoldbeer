import LoginButton from './LoginButton'
import ThemeToggler from './ThemeToggler'

export default function Navbar() {
  return (
    <header className='flex items-center justify-center gap-5'>
      <LoginButton />
      <div className='text-4xl'>ilovecoldbeer</div>
      <ThemeToggler />
    </header>
  )
}
