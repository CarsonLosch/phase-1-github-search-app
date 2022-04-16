const formContainer = document.getElementById('github-form')

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM Fully Loaded")
    const formContainer = document.getElementById('github-form')
    
    formContainer.addEventListener('submit', (event) => {
        event.preventDefault()
        let inputValue = event.target.search.value
        getUserInfo(inputValue)
    })
    let loadedUsernames = document.querySelectorAll("usernames")
    console.log(loadedUsernames)
    
})

function getUserInfo(username) {
    let userContainer = document.getElementById('user-list')
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(user => {
            userContainer.textContent +=
            `
            <li class="usernames">UserName: ${user.login}</li>
            <li><img src="${user.avatar_url}" class="userpic"></li>
            <a href="${user.html_url}">GitHub Link</a>
            `
        })
    })
    .catch(error => {
        console.log("Something went wrong", error)
    })
}

function getUserRepos() {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}
