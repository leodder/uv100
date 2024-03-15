This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
要在 Next.js 项目中使用 https://www.uv100.com/members 作为 API 端点，而不是本地环境的 localhost，您可以使用环境变量来实现。

以下是一种可能的方法：

设置环境变量： 在您的 Next.js 项目中创建一个名为 .env.local 的文件，并添加以下内容：

bash
Copy code
NEXT_PUBLIC_API_URL=https://www.uv100.com/members
在项目中使用环境变量： 在您的代码中，您可以通过 process.env 访问这个环境变量，例如：

javascript
Copy code
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
然后，您可以在您的 API 请求中使用 apiUrl。

请注意，在这个示例中，我使用了 NEXT_PUBLIC_ 前缀，这是因为 Next.js 中的环境变量必须以 NEXT_PUBLIC_ 前缀开头，以便客户端可以访问它们。另外，请确保 .env.local 文件在您的 .gitignore 中，以避免将敏感信息提交到版本控制中。

这样，当您在本地开发时，Next.js 将使用 https://www.uv100.com/members 作为 API 端点，而在生产环境中则可以使用其他值。