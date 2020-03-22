/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTraveller = /* GraphQL */ `
  subscription OnCreateTraveller {
    onCreateTraveller {
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
export const onUpdateTraveller = /* GraphQL */ `
  subscription OnUpdateTraveller {
    onUpdateTraveller {
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
export const onDeleteTraveller = /* GraphQL */ `
  subscription OnDeleteTraveller {
    onDeleteTraveller {
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
export const onCreateMiddle = /* GraphQL */ `
  subscription OnCreateMiddle {
    onCreateMiddle {
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
export const onUpdateMiddle = /* GraphQL */ `
  subscription OnUpdateMiddle {
    onUpdateMiddle {
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
export const onDeleteMiddle = /* GraphQL */ `
  subscription OnDeleteMiddle {
    onDeleteMiddle {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
