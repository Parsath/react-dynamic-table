import Head from 'next/head';
import { StyledButton } from '../src/Button.styled';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Button Modifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <StyledButton className="rounded-full text-purple-600 border border-purple-200 px-9 py-6 bg-purple-200"> */}
        <StyledButton $color="yellow" rounded="true">
          GO
        </StyledButton>
      </main>



    </div>
  )
}
