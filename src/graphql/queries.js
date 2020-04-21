/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecommendedUser = /* GraphQL */ `
  query GetRecommendedUser {
    getRecommendedUser
  }
`;
export const getTraveller = /* GraphQL */ `
  query GetTraveller($email: String!) {
    getTraveller(email: $email) {
      firstName
      lastName
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
      favorites
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
        favorites
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
        long
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
        favorites
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
          long
          floor
          terminal
        }
        content
        rate
        traveller {
          firstName
          lastName
          email
          phoneNumber
          hobbies
          sex
          ageRange
          country
          macid
          intro
          avatarKey
          favorites
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
      long
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
        long
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
export const storeByName = /* GraphQL */ `
  query StoreByName(
    $storeName: String
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeByName(
      storeName: $storeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeName
        description
        tags
        lat
        long
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
