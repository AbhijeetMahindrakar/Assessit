interface QueryTokenProps {
    query: string
    token: string
}



export const CallApi = async ({ query, token }: QueryTokenProps) => {
    try {
        const response = await fetch("http://localhost:9000/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); 

        return data; 
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
};