import CompsLayout from '@/components/layouts/Layout'
import useThreads from '@/hooks/threads'

export default function PagesCategoriesIndex() {
  const { threads } = useThreads()

  return (
    <CompsLayout>
      <div id="pages-categories-index">
        <h1>Next Starter</h1>
      </div>
    </CompsLayout>
  )
}
