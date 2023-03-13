This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). ahmed

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
  # or
  yarn
```

Start the dev server

```bash
  npm run dev
  # or
  yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3001/api/hello](http://localhost:3001/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tech Stack

**Client:** React, Next, TailwindCSS

**Server:** Node, Express

## Dependencies

- **Client side data fetching** [SWR](https://swr.vercel.app/docs/getting-started)
- **Promise based HTTP client** [axios](https://axios-http.com/docs/intro)
- **Form validation** [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- **Phone input** [react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2)
- **Icons:** [@heroicons/react](https://www.npmjs.com/package/@heroicons/react)

## Dev Dependencies

- **Tailwind CSS** [tailwindcss](https://tailwindcss.com)
- **Plugin to Reset form styles** [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)

## Optimizations

#### Pass main layout props

```Pages features
  Page.mainLayoutProps = MainLayoutProps
```

The following table simplifies the main layout props

| Prop              | Type      | Description                   | required | default value             |
| :---------------- | :-------- | :---------------------------- | :------- | :------------------------ |
| `title`           | `string`  | **Required**. Your Page title | `true`   | `Talents Valley`          |
| `pageDescription` | `string`  | Your Page Description         | `false`  | `Talents Valley platform` |
| `withoutNavbar`   | `boolean` | show or hide the navbar       | `false`  | `false`                   |

#### Use nested layouts

```Pages features
  Page.getNestedLayout = (page) => {
    return <NestedLayout>{page}</NestedLayout>;
  }
```

When using any of these pages features, you should use the following type for that specific page:

```
import { NextPageWithLayout } from "types";

const Login: NextPageWithLayout = () => {
    return (
      Login page content....
    )
}
```

#### NoSsr component

To dynamically load a component on the client side, you can use the NoSsr component to disable server-rendering.
This is useful if an external dependency or component relies on browser APIs like window.

```NoSsr usage example
import { NoSsr } from "components";

 <NoSsr>
  // children will be rendered on the client side only
 </NoSsr>

```

## Color Reference

You can check the default theme within `tailwind.config.js` file
| Color | Hex |
| ----------------- | ------------------------------------------------------------------ |
| blue-DEFAULT | ![#0044FF](https://via.placeholder.com/10/0044FF?text=+) #0044FF |
| blue-light | ![#4375FF](https://via.placeholder.com/10/4375FF?text=+) #4375FF |
| blue-dark | ![#002a9d](https://via.placeholder.com/10/002a9d?text=+) #002a9d |
| gray-DEFAULT | ![#00000029](https://via.placeholder.com/10/00000029?text=+) #00000029 |
| gray-dark | ![#707070](https://via.placeholder.com/10/707070?text=+) #707070 |
| gray-light | ![#F3F4F6](https://via.placeholder.com/10/F3F4F6?text=+) #F3F4F6 |

## 🚀 About Me

I'm a front-end developer...
wait for more details later....
