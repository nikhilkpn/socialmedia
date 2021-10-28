import React,{useState} from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material/'
import {Users} from '../../dummyData'

function Post({post}) {
    const {desc,comment,photo,date, userId} = post
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    
    const likeHandler = () => {
        setLike(isLiked? like-1:like +1)
        setIsLiked(!isLiked)
        console.log('cc');
    }
    
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u=>u.id===userId)[0].username}</span>
                        <span className="postDate">{date} ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png"  onClick={likeHandler} alt="" className="likeIcon" />
                        <img src="/assets/heart.png" onClick={likeHandler}  alt="" className="likeIcon" />
                        <span className="postLikeCount">{like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
