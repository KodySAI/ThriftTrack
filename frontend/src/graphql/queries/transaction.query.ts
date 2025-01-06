import { gql } from "@apollo/client";

// GraphQL Queries
export const GET_TRANSACTIONS = gql`
  query GetTransactions {
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
`;

export const GET_TRANSACTION = gql`
  query GetTransaction($id: ID!) {
    transaction(transactionId: $id) {
      _id
      description
      paymentType
      category
      amount
      location
      date
      user {
        name
        username
        profilePicture
      }
    }
  }
`;

export const GET_TRANSACTION_STATISTICS = gql`
  query GetTransactionStatistics {
    categoryStatistics {
      category
      totalAmount
    }
  }
`;

// TypeScript Types

// Transaction Object
export interface Transaction {
    _id: string;
    description: string;
    paymentType: string;
    category: string;
    amount: number;
    location?: string;
    date: string;
}

// User Object
export interface User {
    name: string;
    username: string;
    profilePicture?: string;
}

// Query Variables
export interface GetTransactionVariables {
    id: string;
}

// Query Responses
export interface GetTransactionsResponse {
    transactions: Transaction[];
}

export interface GetTransactionResponse {
    transaction: Transaction & { user: User };
}

export interface CategoryStatistics {
    category: string;
    totalAmount: number;
}

export interface GetTransactionStatisticsResponse {
    categoryStatistics: CategoryStatistics[];
}
