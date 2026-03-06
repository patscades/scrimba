import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
    else if(e.target.id === 'reply-btn'){
        handleReplyBtnClick(e.target.dataset.replyBtn)
    }
    else if(e.target.dataset.delete){
        handleDeleteClick(e.target.dataset.delete)
    }
    else if(e.target.dataset.replyDelete){
        handleReplyDeleteClick(e.target.dataset.replyDelete)
    }
})
 
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ''
    }

}

function handleReplyBtnClick(tweetId){
    const replyInput = document.getElementById(`reply-input-${tweetId}`)

    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(replyInput.value){
        targetTweetObj.replies.unshift(
            {
                handle: `@Scrimba`,
                profilePic: `images/scrimbalogo.png`,
                tweetText: replyInput.value,
                replyUuid: uuidv4()
            })
    }

    render()
    replyInput.value = ''
}


function handleDeleteClick(tweetId){
        const targetTweetIndex = tweetsData.findIndex(function(tweet){
            return tweet.uuid === tweetId
        })
        tweetsData.splice(targetTweetIndex, 1)
        render()
}

function handleReplyDeleteClick(replyId){

         tweetsData.forEach(function(tweet){
           const replyIndex = tweet.replies.findIndex(function(reply){
                return reply.replyUuid === replyId
            })
             if(replyIndex > -1){
                tweet.replies.splice(replyIndex, 1)
             }
         })

        render()
}


function getFeedHtml(){
    let feedHtml = ``

    
    tweetsData.forEach(function(tweet){
        
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        <i class="hidden fa-solid fa-xmark" id="reply-delete-btn-${reply.replyUuid}" data-reply-delete="${reply.replyUuid}"></i>
        </div>
</div>
`
            })
        }
          
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
            <i class="hidden delete-btn fa-solid fa-xmark" id="delete-btn-${tweet.uuid}" data-delete="${tweet.uuid}"></i>
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        <div class="reply-input-area">
            <textarea placeholder="Reply to this tweet..." id="reply-input-${tweet.uuid}"></textarea>
            <button id="reply-btn" data-reply-btn="${tweet.uuid}">Reply</button>
        </div>
        ${repliesHtml}
    </div>   
</div>
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
    function renderDeleteBtn(){
        tweetsData.forEach(function(tweet){
            if(tweet.handle === "@Scrimba"){
                document.getElementById(`delete-btn-${tweet.uuid}`).classList.remove("hidden")
            }
        })
    }
    renderDeleteBtn()

    function renderReplyDeleteBtn(){
        tweetsData.forEach(function(tweet){
            tweet.replies.forEach(function(reply){
                if(reply.handle === "@Scrimba"){
                    document.getElementById(`reply-delete-btn-${reply.replyUuid}`).classList.remove("hidden")
                }
            })
        })
    }
    renderReplyDeleteBtn()
}

render()

