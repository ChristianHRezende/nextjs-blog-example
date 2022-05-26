import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App - First Post</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
}