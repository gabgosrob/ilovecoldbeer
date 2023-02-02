import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function AddBeer() {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Add a beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <form action='/api/add-beer' method='post'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name'></input>

          <label htmlFor='brewer'>Brewer:</label>
          <input type='text' id='brewer' name='brewer'></input>

          <label htmlFor='style'>Style:</label>
          <input type='text' id='style' name='style'></input>

          <label htmlFor='color'>Color:</label>
          <input type='text' id='color' name='color'></input>

          <label htmlFor='description'>Description:</label>
          <input type='text' id='description' name='description'></input>

          <input
            type='hidden'
            id='userId'
            name='userId'
            value='FIX THIS'
          ></input>

          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}
