type Userr = {
  readonly _id: string
  name: string,
  email: string,
  isActive: boolean,
  creditCard?: number
}

let myUser: Userr = {
  _id: "1234",
  name: 'A',
  email: "h@h.com",
  isActive: false
}
myUser.name = "Anas"

console.log(myUser)

const superHeros: string[] = []
const heroPower: number[] = []

superHeros.push("spiderman")

heroPower.push(3)

// Array

const allUser: Userr[] = [
  { _id: '2',
    name: 'Ade',
    isActive: true,
    email: 'anas@vb.com',
    creditCard: 4322
  },
  { _id: '2',
    name: 'Ade',
    isActive: true,
    email: 'anas@vb.com',
    creditCard: 4322
  },
]

const MlModel: number[][] = [
  [223, 223, 223],
  [56, 18, 9]
]