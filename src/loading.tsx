import { LoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderCircle size="48" className="animate-spin text-stone-800" />
    </div>
  )
}
