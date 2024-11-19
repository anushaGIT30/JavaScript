document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-level');
    const mediumLabel = document.getElementById('medium-level');
    const hardLabel = document.getElementById('hard-level');

    function validateUsername(username) {
        if (username.trim() == "") {
            alert("username is not empty");
            return false;
        }
        const regex = /^ [a - zA - Z0 -9_ -]{ 3, 15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invaild Username");
        }
        return isMatching;



    }

    async function fetchUserDetails(username) {

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = 'https://leetcode.com/graphql/';

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl + targetUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData);

            displayUserData(parsedData);
        }
        catch (error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }
    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("logging in username:", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }

    })
});