// export default function arraySplitter<T extends { id: string | number }>(
//   arr: T[],
//   id?: T['id']
// ): [T | undefined, T[]] {
//   const singleObj = id ? arr.find((item) => item.id === id) : undefined
//   const otherObj = arr.filter((obj) => obj !== singleObj)

//   return [singleObj, otherObj]
// }

export default function arraySplitter<T extends { id: string | number }>(
  arr: T[],
  id?: T['id'] | null
): [single: T | undefined, rest: T[]] {
  if (id === undefined || id === null) {
    return [undefined, [...arr]]
  }

  let single: T | undefined
  const rest: T[] = []

  for (const item of arr) {
    if (item.id === id && single === undefined) {
      single = item
    } else {
      rest.push(item)
    }
  }

  return [single, rest]
}
