/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraveller = /* GraphQL */ `
  query GetTraveller($id: ID!) {
    getTraveller(id: $id) {
      id
      email
      firstName
      lastName
      nickName
      phoneNumber
      sexualOrien
      sex
    }
  }
`;
export const listTravellers = /* GraphQL */ `
  query ListTravellers(
    $filter: ModelTravellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTravellers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        nickName
        phoneNumber
        sexualOrien
        sex
      }
      nextToken
    }
  }
`;
