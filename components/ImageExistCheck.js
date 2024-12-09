import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';

const ImageExistCheck = ({ imageName }) => {
    const [validImageUrl, setValidImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to check if the image exists at a given URL
    const checkImageExists = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok; // Return true if the image exists (status 200)
        } catch {
            return false; // Return false if there was an error
        }
    };

    // Try all URLs concurrently using Promise.all
    const tryImageUrls = async () => {
        // List of image URLs to check
        const imageUrls = [
            'https://danielfooddiary.com/wp-content/uploads/' + imageName,
            'https://www.subway.com/ns/images/menu/SIN/ENG/' + imageName,
            'https://www.mcdonalds.com.sg/sites/default/files/' + imageName,
            'https://www.vforveganista.com/wp-content/uploads/' + imageName,
            imageName // Local file check (if necessary)
        ];

        // Try all URLs concurrently using Promise.all
        const results = await Promise.all(imageUrls.map((url) => checkImageExists(url)));
        const validIndex = results.findIndex((exists) => exists);

        if (validIndex !== -1) {
            setValidImageUrl(imageUrls[validIndex]);
        } else {
            setValidImageUrl(getRandomPlaceholder()); // Set a random placeholder if no image is found
        }

        setLoading(false); // Stop loading regardless of success or failure
    };

    // Function to return a random placeholder image
    const getRandomPlaceholder = () => {
        const randomPlaceholderIndex = Math.floor(Math.random() * 3);
        const placeholderImages = [
            require('../assets/images/placeholder1.png'),
            require('../assets/images/placeholder2.png'),
            require('../assets/images/placeholder3.png'),
        ];
        return placeholderImages[randomPlaceholderIndex];
    };

    // Run the image check when the component mounts or imageName changes
    useEffect(() => {
        tryImageUrls();
    }, [imageName]); // Re-run if the imageName changes

    // Show loading message if the image is still being checked
    if (loading) {
        return <Text>Loading...</Text>;
    }

    // Conditionally render Image component based on whether the URL is remote or local
    return (
        <Image
            source={typeof validImageUrl === 'string' ? { uri: validImageUrl } : validImageUrl}
            style={styles.image}
        />
    );
};

export default ImageExistCheck;