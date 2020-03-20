/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraveller = /* GraphQL */ `
  mutation CreateTraveller(
    $input: CreateTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    createTraveller(input: $input, condition: $condition) {
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
export const updateTraveller = /* GraphQL */ `
  mutation UpdateTraveller(
    $input: UpdateTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    updateTraveller(input: $input, condition: $condition) {
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
export const deleteTraveller = /* GraphQL */ `
  mutation DeleteTraveller(
    $input: DeleteTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    deleteTraveller(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
