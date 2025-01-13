import React, { useState } from "react";
import axios from "axios";
import './../../assets/styles/CommunityModal/style.css';

function CreateCommunityModal({ isOpen, onClose }) {
    const [communityName, setCommunityName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // To store success message
    const [createdCommunity, setCreatedCommunity] = useState(null); // To store the created community

    // Return null early if modal is closed
    if (!isOpen) return null;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Prepare the data for the API
            const communityData = {
                user_id: 1,  // Example user_id, update this as necessary
                name: communityName,
                description: description,
                created_at: null,  // Placeholder, assuming the API sets this
                updated_at: null   // Placeholder, assuming the API sets this
            };

            // Send POST request to create the community
            const response = await axios.post("http://127.0.0.1:8000/api/subreddit", communityData);

            // Handle successful creation
            setSuccessMessage(response.data.Message);  // Set the success message
            setCreatedCommunity(response.data.subreddit); // Set the created community data

            // Optionally, close the modal after 2 seconds or based on the response
            // setTimeout(() => onClose(), 2000); // Close after 2 seconds, for example
        } catch (error) {
            console.error("Error posting data:", error);
            setError("There was an error creating the community. Please try again.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Tell us about your community</h2>
                <p>A name and description help people understand what your community is all about.</p>

                {/* Display error message if there was an error */}
                {error && <p className="error-message">{error}</p>}

                {/* Display success message if community is created */}
                {successMessage && (
                    <div className="success-message">
                        <p>{successMessage}</p>
                        <p><strong>Community Name:</strong> {createdCommunity?.name}</p>
                        <p><strong>Description:</strong> {createdCommunity?.description}</p>
                        <p><strong>Community ID:</strong> {createdCommunity?.id}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <label>
                        Community name *
                        <input
                            type="text"
                            maxLength="21"
                            value={communityName}
                            onChange={(e) => setCommunityName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description *
                        <textarea
                            maxLength="1000"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCommunityModal;
