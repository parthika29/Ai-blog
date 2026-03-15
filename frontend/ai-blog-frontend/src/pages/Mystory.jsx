// src/pages/storyPage.jsx
import React from 'react';
import '../styles/storyPage.css';

const StoryPage = () => {
    return (
        <div className="story-container">
            <div className="story-header">
                <h1>Our Story</h1>
                <p>Write freely, create smarter with AI.</p>
            </div>

            <div className="story-section">
                <div className="story-image">
                    <img src="https://digitaloka.com/wp-content/uploads/2024/04/Konten-digital.jpeg" alt="Handcrafting" />
                </div>
                <div className="story-text">
                    <h2>How We Started</h2>
                    <p>Our platform was created with a simple idea — to make writing easier, smarter, and more accessible for everyone. We noticed that many people have great ideas and stories to share, but sometimes they struggle with finding the right words, organizing their thoughts, or getting started.

                        That’s where our platform comes in.

                        We built this space so that anyone can create and publish blogs easily. Writers can express their ideas in their own words, share their experiences, and connect with readers from around the world. At the same time, we also introduced AI-powered writing assistance to help users generate ideas, improve content, and overcome writer’s block.</p>
                </div>
            </div>

            <div className="story-section">
                <div className="story-image">
                    <img src="https://www.notiontechnologies.com/blog/wp-content/uploads/2023/04/best-ai-writing-tools.webp" alt="Artisan Tools" />
                </div>
                <div className="story-text">
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower people to share their ideas, knowledge, and creativity with the world by making writing simple and accessible for everyone. We believe that everyone has a story to tell, valuable insights to share, and unique perspectives that deserve to be heard.</p>
                </div>
            </div>

            <div className="story-section">
                <div className="story-image">
                    <img src="https://edynamiclearning.com/wp-content/uploads/2019/04/Creative-Writing-I-HIGH-RES.jpg" alt="Teamwork" />
                </div>
                <div className="story-text">
                    <h2>Our Team</h2>
                    <p>I would like to sincerely thank our users and contributors for being a part of our journey. Your ideas, creativity, and support inspire us to keep improving this platform every day.</p>
                </div>
            </div>
        </div>
    );
};

export default StoryPage;
