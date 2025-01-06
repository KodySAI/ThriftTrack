import { gql } from "@apollo/client";

// GraphQL Mutations
export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
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

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
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

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($transactionId: ID!) {
    deleteTransaction(transactionId: $transactionId) {
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

export interface CreateTransactionInput {
  description: string;
  paymentType: string;
  category: string;
  amount: number;
  location?: string;
  date: string;
}

export interface UpdateTransactionInput {
  _id: string;
  description?: string;
  paymentType?: string;
  category?: string;
  amount?: number;
  location?: string;
  date?: string;
}

export interface DeleteTransactionVariables {
  transactionId: string;
}

export interface CreateTransactionResponse {
  createTransaction: Transaction;
}

export interface UpdateTransactionResponse {
  updateTransaction: Transaction;
}

export interface DeleteTransactionResponse {
  deleteTransaction: Transaction;
}
