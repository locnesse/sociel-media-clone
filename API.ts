/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  image?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateIpsetInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
};

export type ModelIpsetConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelIpsetConditionInput | null > | null,
  or?: Array< ModelIpsetConditionInput | null > | null,
  not?: ModelIpsetConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateIpsetInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
};

export type DeleteIpsetInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIpsetFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelIpsetFilterInput | null > | null,
  or?: Array< ModelIpsetFilterInput | null > | null,
  not?: ModelIpsetFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIpsetMutationVariables = {
  input: CreateIpsetInput,
  condition?: ModelIpsetConditionInput | null,
};

export type CreateIpsetMutation = {
  createIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIpsetMutationVariables = {
  input: UpdateIpsetInput,
  condition?: ModelIpsetConditionInput | null,
};

export type UpdateIpsetMutation = {
  updateIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIpsetMutationVariables = {
  input: DeleteIpsetInput,
  condition?: ModelIpsetConditionInput | null,
};

export type DeleteIpsetMutation = {
  deleteIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetIpsetQueryVariables = {
  id: string,
};

export type GetIpsetQuery = {
  getIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIpsetsQueryVariables = {
  filter?: ModelIpsetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIpsetsQuery = {
  listIpsets:  {
    __typename: "ModelIpsetConnection",
    items:  Array< {
      __typename: "Ipset",
      id: string,
      content: string,
      image: string | null,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image: string | null,
    Ipsets:  {
      __typename: "ModelIpsetConnection",
      items:  Array< {
        __typename: "Ipset",
        id: string,
        content: string,
        image: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIpsetSubscription = {
  onCreateIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIpsetSubscription = {
  onUpdateIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIpsetSubscription = {
  onDeleteIpset:  {
    __typename: "Ipset",
    id: string,
    content: string,
    image: string | null,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image: string | null,
      Ipsets:  {
        __typename: "ModelIpsetConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
