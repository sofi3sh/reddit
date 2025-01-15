import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import './../../assets/styles/MainPage/style.css';

function MainPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/post");
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="main-page">
            {loading ? (
                <p>Loading posts...</p>
            ) : (
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            )}
        </div>
    );
}

export default MainPage;
