import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ot7zkq0vv501xt1x5z2qfg/master', 
    cache: new InMemoryCache()
})