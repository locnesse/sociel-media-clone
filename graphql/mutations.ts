/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      Ipsets {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      Ipsets {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      Ipsets {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createIpset = /* GraphQL */ `
  mutation CreateIpset(
    $input: CreateIpsetInput!
    $condition: ModelIpsetConditionInput
  ) {
    createIpset(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        Ipsets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateIpset = /* GraphQL */ `
  mutation UpdateIpset(
    $input: UpdateIpsetInput!
    $condition: ModelIpsetConditionInput
  ) {
    updateIpset(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        Ipsets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteIpset = /* GraphQL */ `
  mutation DeleteIpset(
    $input: DeleteIpsetInput!
    $condition: ModelIpsetConditionInput
  ) {
    deleteIpset(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        Ipsets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
