const range = len => {
 const arr = []
 for (let i = 0; i < len; i++) {
   arr.push(i)
 }
 return arr
}

const parseFromDB = (count) => {
 return {
  filename: 'example.fq',
  ID: count,
  header: 'header',
  sequence: 'seq',
  qualityScore: 'qual'
 }
}

export function retrieveFASTQ(len = 1) {
 let count = 0
 return range(len).map(d => {
  count++
  return {
   ...parseFromDB(count),
   children: range(10).map(parseFromDB)
  }
 })
}