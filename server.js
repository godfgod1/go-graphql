import { ApolloServer, gql } from "apollo-server";



const typeDefs = gql`
    type User {
        id:ID
        username:String
    }
    type Tweet {
        id:ID
        text:String
        author:User
    }
    type Query{
        allTweets:[Tweet]
        tweet(id:ID):Tweet
    }


`
// /api/v1/tweets
// /api/v1/tweet/:id

const server = new ApolloServer({typeDefs})



server.listen().then(({url})=>{
    console.log(url)
})

