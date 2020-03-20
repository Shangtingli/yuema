/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTraveller = /* GraphQL */ `
  subscription OnCreateTraveller {
    onCreateTraveller {
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
export const onUpdateTraveller = /* GraphQL */ `
  subscription OnUpdateTraveller {
    onUpdateTraveller {
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
export const onDeleteTraveller = /* GraphQL */ `
  subscription OnDeleteTraveller {
    onDeleteTraveller {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
