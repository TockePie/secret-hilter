export default function arraySplitter<T extends { id: string | number }>(
  arr: T[],
  id?: T['id']
): [T | undefined, T[]] {
  const singleObj = id ? arr.find((item) => item.id === id) : undefined
  const otherObj = arr.filter((obj) => obj !== singleObj)

  return [singleObj, otherObj]
}
