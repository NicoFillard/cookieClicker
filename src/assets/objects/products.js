import uuid from 'uuid/v4'

export default {
   products: [
      {
          id: uuid(),
          name: 'cursor',
          price: 50,
          cookiePerSeconds: 1,
          purchased: 0
      },
      {
          id: uuid(),
          name: 'grandma',
          price: 100,
          cookiePerSeconds: 5,
          purchased: 0
      }
  ]
}
