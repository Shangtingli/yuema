export const getStoreComments = `
  query GetStoreComments($id: ID!) {
    getStore(id: $id) {
      comments {
        items {
          id
          content
          rate
          traveller{
            firstName
            lastName
            avatarKey
            email
          }
        }
        nextToken
      }
    }
  }
`