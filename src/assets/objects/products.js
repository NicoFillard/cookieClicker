import uuid from 'uuid/v4'

export default {
   products: [
      {
          id: uuid(),
          name: 'Cursor',
          price: 50,
          cookiePerSeconds: 1,
          purchased: 0
      },
      {
          id: uuid(),
          name: 'Grandma',
          price: 100,
          cookiePerSeconds: 5,
          purchased: 0
      }
  ]
}
