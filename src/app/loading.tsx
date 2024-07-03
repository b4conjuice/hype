import Main from '@/app/_components/main'
import Markdown from '@/app/_components/markdown'

export default function Loading() {
  return (
    <Main className='flex flex-col md:p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Markdown content={''} />
      </div>
    </Main>
  )
}
