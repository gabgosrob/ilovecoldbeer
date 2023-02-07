import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className='border border-black dark:border-white rounded p-1'
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => signIn()}
        className='border border-black dark:border-white rounded p-1'
      >
        Sign in
      </button>
    </div>
  )
}
