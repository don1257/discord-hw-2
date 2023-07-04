const postDiscordMsg = async (content) => {
    let url = 'https://www.hackercoop.dev/api/boop';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'HackerSummer2023',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: `Message from don1257: ${content}` })
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to post message');
            }
            return response;
        })
        .catch((error) => {
            console.error("Error during fetch: ", error);
            return error;
        });
}


export default postDiscordMsg;
