# ilovecoldbeer ![Vercel](https://vercelbadge.vercel.app/api/gabgosrob/ilovecoldbeer)

This is a beer review web application built using [Next.js](https://nextjs.org/).

## Tools

The application was built on the [Next.js](https://www.npmjs.com/package/next) framework. It was then deployed with [Vercel](https://vercel.com).

## Setup

You can follow these steps to setup a local version of the application on your machine.

First, install the dependencies:

```bash
npm install
```

You can then create a `.env.local` file and add the following environment variables (which will automatically get registered into the app):

```
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
DATABASE_URL=
SHADOW_DATABASE_URL=
```

Finally, you can run the application in development mode:

```bash
npm run dev
```

which will then be accessible at https://localhost:3000/
