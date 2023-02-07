import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 rounded shadow'
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
        className='bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 rounded shadow'
      >
        Sign in
      </button>
    </div>
  )
}
