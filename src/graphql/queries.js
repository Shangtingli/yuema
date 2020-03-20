/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraveller = /* GraphQL */ `
  query GetTraveller($email: String!) {
    getTraveller(email: $email) {
      firstName
      lastName
      flightDest
      flightTime
      email
      phoneNumber
      hobbies
      sex
      ageRange
      country
      macid
      intro
      comments {
        items {
          id
          content
          rate
        }
        nextToken
      }
      avatarKey
      avatarUrl
    }
  }
`;
export const listTravellers = /* GraphQL */ `
  query ListTravellers(
    $email: String
    $filter: ModelTravellerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTravellers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        firstName
        lastName
        flightDest
        flightTime
        email
        phoneNumber
        hobbies
        sex
        ageRange
        country
        macid
        intro
        comments {
          nextToken
        }
        avatarKey
        avatarUrl
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      store {
        id
        storeName
        description
        tags
        lat
        lng
        floor
        terminal
        comments {
          nextToken
        }
      }
      content
      rate
      traveller {
        firstName
        lastName
        flightDest
        flightTime
        email
        phoneNumber
        hobbies
        sex
        ageRange
        country
        macid
        intro
        comments {
          nextToken
        }
        avatarKey
        avatarUrl
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        store {
          id
          storeName
          description
          tags
          lat
          lng
          floor
          terminal
        }
        content
        rate
        traveller {
          firstName
          lastName
          flightDest
          flightTime
          email
          phoneNumber
          hobbies
          sex
          ageRange
          country
          macid
          intro
          avatarKey
          avatarUrl
        }
      }
      nextToken
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      storeName
      description
      tags
      lat
      lng
      floor
      terminal
      comments {
        items {
          id
          content
          rate
        }
        nextToken
      }
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeName
        description
        tags
        lat
        lng
        floor
        terminal
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
