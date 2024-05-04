import { unstable_noStore as noStore } from 'next/cache'

import Main from '@/app/_components/main'
import Markdown from '@/app/_components/markdown'
import fetcher from '@/lib/fetcher'
import sanitize from '@/lib/sanitize'

type Content = {
  markdown: string
}

export default async function Home() {
  noStore()
  const data: Content = await fetcher(process.env.CONTENT_URL!)
  const content = sanitize(data.markdown)
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Markdown content={content} />
      </div>
    </Main>
  )
}
