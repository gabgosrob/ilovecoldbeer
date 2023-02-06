import Head from 'next/head'

export default function AddBeer() {
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
          <input
            type='text'
            id='name'
            name='name'
            required
            maxLength={80}
          ></input>

          <label htmlFor='brewer'>Brewer:</label>
          <input
            type='text'
            id='brewer'
            name='brewer'
            required
            maxLength={80}
          ></input>

          <label htmlFor='style'>Style:</label>
          <input
            type='text'
            id='style'
            name='style'
            required
            maxLength={80}
          ></input>

          <label htmlFor='color'>Color:</label>
          <input
            type='text'
            id='color'
            name='color'
            required
            maxLength={80}
          ></input>

          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            id='description'
            name='description'
            required
            maxLength={240}
          ></input>

          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}
