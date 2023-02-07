import Head from 'next/head'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'

export default function AddBeer() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return Router.push('/api/auth/signin')
    },
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Add a beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='m-3 flex flex-col justify-center items-center gap-6'>
        <Navbar />
        <div>Add a beer!</div>
        <form
          action='/api/add-beer'
          method='post'
          className='flex flex-col gap-3'
          id='beerform'
        >
          <div className='flex flex-col'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              required
              maxLength={80}
              className='border'
            ></input>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='brewer'>Brewer:</label>
            <input
              type='text'
              id='brewer'
              name='brewer'
              required
              maxLength={80}
              className='border'
            ></input>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='style'>Style:</label>
            <input
              type='text'
              id='style'
              name='style'
              required
              maxLength={80}
              className='border'
            ></input>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='color'>Color:</label>
            <input
              type='text'
              id='color'
              name='color'
              required
              maxLength={80}
              className='border'
            ></input>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='description'>Description:</label>
            <textarea
              form='beerform'
              id='description'
              name='description'
              required
              maxLength={240}
              className='border h-20'
            ></textarea>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}
