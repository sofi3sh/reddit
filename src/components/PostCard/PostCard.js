import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../assets/styles/PostCard/style.css';

function PostCard({ post }) {
    const [subredditName, setSubredditName] = useState('');
    const [liked, setLiked] = useState(() => {
        const savedVote = localStorage.getItem(`vote_status_${post.id}`);
        return savedVote ? JSON.parse(savedVote) : null;
    });

    useEffect(() => {
        const fetchSubreddit = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/subreddit/show/${post.subreddit_id}`);
                setSubredditName(response.data.name);
            } catch (error) {
                console.error("Error fetching subreddit:", error);
            }
        };

        fetchSubreddit();
    }, [post.subreddit_id]);

    const handleUpvote = async () => {
        const voteData = {
            user_id: 1,
            post_id: post.id,
            vote_type: liked ? 'downvote' : 'upvote',
        };

        try {
            await axios.post('http://127.0.0.1:8000/api/vote', voteData);
            const newLikedStatus = !liked;
            setLiked(newLikedStatus);
            localStorage.setItem(`vote_status_${post.id}`, JSON.stringify(newLikedStatus));
        } catch (error) {
            console.error("Error voting:", error);
        }
    };

    return (
        <div className="post-card">
            <div className="post-divider"></div>
            <div className="post-card-header">
                <span className="subreddit-name">r/{subredditName}</span> • <span className="post-time">2 days ago</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <div className="post-footer">
                <button
                    className={`btn ${liked === true ? 'liked' : ''}`}
                    onClick={handleUpvote}
                >
                    {liked === true ? 'Upvoted' : liked === false ? 'Downvoted' : 'Upvote'}
                </button>
                <button className="btn">Comments</button>
                <button className="btn">Share</button>
            </div>
        </div>
    );
}

export default PostCard;
