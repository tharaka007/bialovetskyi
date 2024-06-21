async function fetchPosts() {
    const response = await fetch('https://favourites.lk/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetPosts {
            posts {
              nodes {
                title
                content
              }
            }
          }
        `,
      }),
      cache: 'no-store',
    });
  
    const { data } = await response.json();
    return data.posts.nodes;
  }
  
  export default fetchPosts;
  