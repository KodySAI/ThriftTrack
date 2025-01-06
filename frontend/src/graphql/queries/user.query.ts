import { gql } from "@apollo/client";

// GraphQL Queries
export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`;

export const GET_USER_AND_TRANSACTIONS = gql`
  query GetUserAndTransactions($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      username
      profilePicture
      transactions {
        _id
        description
        paymentType
        category
        amount
        location
        date
      }
    }
  }
`;

// TypeScript Types
export interface Transaction {
    _id: string;
    description: string;
    paymentType: string;
    category: string;
    amount: number;
    location?: string;
    date: string;
}

export interface User {
    _id: string;
    name: string;
    username: string;
    profilePicture?: string;
    transactions?: Transaction[];
}

// Query Variables
export interface GetUserAndTransactionsVariables {
    userId: string;
}

// Query Responses
export interface GetAuthenticatedUserResponse {
    authUser: User;
}

export interface GetUserAndTransactionsResponse {
    user: User;
}
