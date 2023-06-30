const postDiscordMsg = async (content) => {
    let url = 'https://www.hackercoop.dev/api/boop'
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'HackerSummer2023',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: `Message from don1257: ${content}` })
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
}

export default postDiscordMsg;
