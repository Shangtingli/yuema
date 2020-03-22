/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      avatarUrl
      favorites {
        items {
          id
        }
        nextToken
      }
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
        avatarUrl
        favorites {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMiddle = /* GraphQL */ `
  query GetMiddle($id: ID!) {
    getMiddle(id: $id) {
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
        travellers {
          nextToken
        }
      }
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
        avatarUrl
        favorites {
          nextToken
        }
      }
    }
  }
`;
export const listMiddles = /* GraphQL */ `
  query ListMiddles(
    $filter: ModelMiddleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMiddles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          avatarUrl
        }
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
        travellers {
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
        avatarUrl
        favorites {
          nextToken
        }
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
      travellers {
        items {
          id
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
        travellers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
