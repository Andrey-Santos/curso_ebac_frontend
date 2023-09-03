document.addEventListener('DOMContentLoaded', function(){
    const avatarElement = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    fetch('https://api.github.com/users/andrey-santos')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;        
        })
})