import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';

const ImageExistCheck = ({ imageName }) => {  // Changed component name to ImageExistCheck
    const [validImageUrl, setValidImageUrl] = useState(null);  // State to hold the valid image URL
    const [loading, setLoading] = useState(true);  // State to track if the image is loading

    const checkImageExists = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;  // Return true if the image exists (status 200)
        } catch (error) {
            console.error('Error checking image:', error);
            return false;  // Return false if there was an error
        }
    };

    // Function to try different URLs
    const tryImageUrls = async () => {
        const baseUrl = "https://cats.com/wp-content/uploads/2020/10/";

        // List of image URLs to check
        const imageUrls = [
            baseUrl + imageName + "-compressed-1-540x360.jpg",
            baseUrl + imageName + "-compressed-540x360.jpg",
            baseUrl + imageName + "-540x360.jpg",
            baseUrl + imageName + "-1.jpg", // Fallback image format
        ];

        // Check each URL
        for (let url of imageUrls) {
            const imageExists = await checkImageExists(url);
            if (imageExists) {
                setValidImageUrl(url);  // Set the valid image URL
                setLoading(false);  // Stop loading once a valid image is found
                return;
            }
        }

        // If no valid image is found, set a placeholder
        setValidImageUrl('https://img.freepik.com/premium-vector/lost-missing-pet-animal-poster-notice-announcement-wall-concept_133260-7418.jpg');
        setLoading(false);
    };

    // Run the image check when the component mounts
    useEffect(() => {
        tryImageUrls();
    }, [imageName]); // Re-run if the imageName changes

    // Show loading message if the image is still being checked
    if (loading) {
        return <Text>Loading...</Text>;
    }

    return <Image source={{ uri: validImageUrl }}  style={styles.image}/>;
};

export default ImageExistCheck;