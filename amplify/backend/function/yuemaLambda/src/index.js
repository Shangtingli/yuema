const storeExample = [
        {
            id:"id1",
            Category: "sport"
        },
        {
            id: "id2",
            Category: "beauty"
        },
    ]

const userExample = [
        {
            user:"user1",
            gender: "male"
        },
        {
            user: "user2",
            gender: "female"
        }
]


const resolvers = {
    Query : {
        getUser: () => {
            return userExample;
        },

        getStore2: () => {
            return storeExample;
        }
    }
}

exports.handler = async (event) => {
    const typeHandler = resolvers[event.typeName];
    console.log(typeHandler)
    if (typeHandler){
        const resolver = typeHandler[event.fieldName];
        // const response = {
        //     statusCode: 200,
        //     body: JSON.stringify('Hello from Lambda!'),
        // };
        if (resolver){
            const result = await resolver(event);

            return result;
        }

    }
    throw new Error("Resolver not found");
};
