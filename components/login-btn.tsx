import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
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
        className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Sign in
      </button>
    </div>
  )
}
