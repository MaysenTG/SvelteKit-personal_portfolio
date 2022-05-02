import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = 'https://admin.maysengreenwood.me/api/v1/graphql'

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)