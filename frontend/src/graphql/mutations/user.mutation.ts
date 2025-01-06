import { gql } from "@apollo/client";

// GraphQL Mutations
export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      _id
      name
      username
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      _id
      name
      username
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

// TypeScript Types
export interface User {
    _id: string;
    name: string;
    username: string;
}

export interface SignUpInput {
    name: string;
    username: string;
    password: string;
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface SignUpResponse {
    signUp: User;
}

export interface LoginResponse {
    login: User;
}

export interface LogoutResponse {
    logout: {
        message: string;
    };
}

export interface SignUpVariables {
    input: SignUpInput;
}

export interface LoginVariables {
    input: LoginInput;
}
