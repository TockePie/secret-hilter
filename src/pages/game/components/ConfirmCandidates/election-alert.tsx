import { TriangleAlert } from 'lucide-react'

//TODO: implement dialog about rules explanation
export default function ElectionAlert() {
  return (
    <div className="mt-5 flex gap-3 rounded-2xl border-2 border-amber-300 bg-amber-100 p-3">
      <TriangleAlert
        className="size-8"
        color="var(--color-amber-800)"
        strokeWidth={2.5}
      />
      <div className="flex flex-col gap-2 text-left max-md:max-w-[80%]">
        <p className="text-xl font-medium text-amber-800">
          If the government is rejected, the upper policy will be enacted.
        </p>
        <p className="text-amber-600">Press to learn more about the rule</p>
      </div>
    </div>
  )
}
