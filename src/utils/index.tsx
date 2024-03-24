export const initialItems = new Array(100).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 99
    // isSelected: i === 29_999_998
  }
})

export const shuffle = (users: string[]) => {
  let currentIndex = users.length,
    randomIndex

  // While there are elements remaining to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // Swap the current element with the random element
    ;[users[currentIndex], users[randomIndex]] = [
      users[randomIndex],
      users[currentIndex]
    ]
  }

  return users

  // for (let i = users.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1))
  //   ;[users[i], users[j]] = [users[j], users[i]]
  // }
  // return users
}
