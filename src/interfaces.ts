interface User {
  readonly dbId: number
  email: string,
  userId: number,
  googleId?: string,
  startTrail(): number,
  getCoupon(couponName: string): number
}

interface User {
  githubToken: string
}

const anas: User = {dbId: 2, email: 'a@a.com', 
  githubToken: '22bfm3oodjkf8', 
  userId: 22, 
  startTrail: () => {
  return 2
},
getCoupon: (name: 'anas01') => {
  return 10
}
}

