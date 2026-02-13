// users info
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// variables

const postContainer = document.getElementById("post-container")
const postAvatar = document.getElementById("avatar")
const postName = document.getElementById("name")
const postLocation = document.getElementById("location")
const postImg = document.getElementById("post-img")
const postLikes = document.getElementById("likes")
const postUsername = document.getElementById("username")
const postComment = document.getElementById("comment")
const like = document.getElementById("like")

// render function

function renderPost() {
    let postsList = ""
    for (let i = 0; i < posts.length; i++) {
    postsList += `
                    <div id="post-container" class="post-container">
                        <div class="user-container">
                        
                            <img alt="" id="avatar" class="avatar post-avatar" src="${posts[i].avatar}"> 
                            
                            <div class="user-info">
                                <p id="name" class="name bold">${posts[i].name}</p> 
                                <p id="location" class="location">${posts[i].location}</p>  
                            </div>
                            
                        </div>
                        
                            <img alt="" id="post-img" class="post-img" src="${posts[i].post}"> 
                        
                        <div class="icons-container">
                            <img alt="" id="like" class="icon" src="images/icon-heart.png">
                            <img alt="" class="icon" src="images/icon-comment.png">
                            <img alt="" class="icon" src="images/icon-dm.png">
                        </div>
                        
                            <p id="likes" class="likes bold">${posts[i].likes} likes</p> 
                            
                        <div class="comment-container"> 
                            <p id="username" class="username bold">${posts[i].username}</p> 
                            <p id="comment" class="comment">${posts[i].comment}</p>  
                        </div>
                    </div>`
            posts[i]
            
    }
    postContainer.innerHTML = postsList
}

renderPost()



