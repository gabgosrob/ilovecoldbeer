import Head from 'next/head'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'

export default function AddBeer() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return Router.push('/api/auth/signin')
    },
  })

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center mt-10'>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Add a beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='m-3 mt-12 flex flex-col justify-center items-center gap-10'>
        <Navbar />
        <div className='text-lg'>Add a beer!</div>
        <form
          action='/api/add-beer'
          method='post'
          className='flex flex-col gap-4'
          id='beerform'
        >
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              required
              maxLength={80}
              className='shadow appearance-none border rounded p-1'
            ></input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='brewer'>Brewer</label>
            <input
              type='text'
              id='brewer'
              name='brewer'
              required
              maxLength={80}
              className='shadow appearance-none border rounded p-1'
            ></input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='style'>Style</label>
            <input
              type='text'
              id='style'
              name='style'
              required
              maxLength={80}
              className='shadow appearance-none border rounded p-1'
            ></input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='color'>Color</label>
            <input
              type='text'
              id='color'
              name='color'
              required
              maxLength={80}
              className='shadow appearance-none border rounded p-1'
            ></input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='description'>Description</label>
            <textarea
              form='beerform'
              id='description'
              name='description'
              required
              maxLength={240}
              className='shadow appearance-none border rounded h-20 p-1'
            ></textarea>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}
