import { unstable_noStore as noStore } from 'next/cache'

import Main from '@/app/_components/main'
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
        <article
          className='proselg:prose-xl prose bg-cb-blue text-cb-white prose-headings:text-cb-white prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 w-full rounded p-4'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Main>
  )
}
