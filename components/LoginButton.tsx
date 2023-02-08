import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className='p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'
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
        className='p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'
      >
        Sign in
      </button>
    </div>
  )
}
