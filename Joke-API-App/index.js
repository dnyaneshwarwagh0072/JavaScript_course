
async function fetchDadJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            jokeText.innerHTML = data.joke;
        } else {
            throw new Error('Failed to fetch dad joke');
        }
    } catch (error) {
        console.error(error);
        return 'An error occurred while fetching a dad joke';
    }
}


const jokeText = document.getElementById('joke');
const getJokeButton = document.getElementById('btn');

getJokeButton.addEventListener('click', async () => {
    const joke = await fetchDadJoke();
});
fetchDadJoke();