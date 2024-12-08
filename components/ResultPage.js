import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { dataToDisplay } from "./dataToDisplay";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";
import { dataSource } from "./datasource";

const ResultPage = ({ navigation }) => {
    // State to store the total calories
    const [totalCalories, setTotalCalories] = useState(0);

    // Function to calculate sum of calories
    const sumCalories = () => {
        // Initialize a variable to hold the sum of calories
        let total = 0;

        // Iterate over each section (e.g., Breakfast, Lunch, Dinner)
        dataToDisplay.forEach(section => {
            // Iterate over each item in the section's data array
            section.data.forEach(item => {
                // Convert the Calories to a number and add to the total sum
                total += Number(item.Calories);
            });
        });

        return total; // Return the calculated total
    };

    // Use useEffect to call sumCalories when the component mounts
    useEffect(() => {
        const calories = sumCalories();
        setTotalCalories(calories); // Update the state with the total calories
    }, []); // Empty dependency array, so it runs only once when component mounts

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total Calories: {totalCalories}</Text>

            {/* Example Button to navigate, since navigation wasn't used */}
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()} // Navigate back to previous screen
            />
        </View>
    );
};

export default ResultPage;