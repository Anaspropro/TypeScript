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