/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraveller = /* GraphQL */ `
  mutation CreateTraveller(
    $input: CreateTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    createTraveller(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      sexualOrien
      sex
    }
  }
`;
export const updateTraveller = /* GraphQL */ `
  mutation UpdateTraveller(
    $input: UpdateTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    updateTraveller(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      sexualOrien
      sex
    }
  }
`;
export const deleteTraveller = /* GraphQL */ `
  mutation DeleteTraveller(
    $input: DeleteTravellerInput!
    $condition: ModelTravellerConditionInput
  ) {
    deleteTraveller(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      sexualOrien
      sex
    }
  }
`;
