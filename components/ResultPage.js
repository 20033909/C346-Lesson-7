import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity,  Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from "./styles";
import {dataToDisplay} from "./dataToDisplay";
import Icon from 'react-native-vector-icons/Ionicons';

const ResultPage = ({ navigation }) => {
    // State to store input values
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState(null);
    const [totalCalories, setTotalCalories] = useState(0);
    const [bmr, setBmr] = useState(0);




    const calculateBMR = () => {
        const weightInKg = parseFloat(weight); // Convert weight to a number
        const heightInCm = parseFloat(height); // Convert height to a number
        const ageInYears = parseInt(age, 10); // Convert age to an integer
        const activityMultiplier = parseFloat(activityLevel); // Convert activity level to a number

        if (!weightInKg || !heightInCm || !ageInYears || !activityMultiplier || !gender) {
            alert('Please fill out all fields.');
            return;
        }

        let bmrValue = 0;

        // BMR Calculation for Male or Female
        if (gender === 'male') {
            bmrValue = (10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5) * activityMultiplier;
        } else if (gender === 'female') {
            bmrValue = (10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161) * activityMultiplier;
        }

        setBmr(bmrValue);

        // Call function to calculate total calories
        const totalConsumedCalories = sumCalories();
        setTotalCalories(totalConsumedCalories);

        let calorieMessage = '';

        // Determine the calorie message
        if (bmrValue > totalConsumedCalories + 100) {
            calorieMessage = `Calories Consumed: ${totalConsumedCalories}\nBelow your Recommended Daily Intake of ${bmrValue} Calories`;
        } else if (bmrValue < totalConsumedCalories - 100) {
            calorieMessage = `Calories Consumed: ${totalConsumedCalories}\nExceeded your Recommended Daily Intake of ${bmrValue} Calories`;
        } else {
            calorieMessage = `Calories Consumed: ${totalConsumedCalories}\nClose to your Recommended Daily Intake of ${bmrValue} Calories`;
        }
        Alert.alert('Calories Calculation', calorieMessage);
    };

    // Function to calculate total calories consumed
    const sumCalories = () => {
        let total = 0;


        dataToDisplay.forEach(section => {
            section.data.forEach(item => {
                total += Number(item.Calories);
            });
        });

        return total;
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Kcal Calculator</Text>
                <Icon name="calculator-sharp" size={60}  />
            </View>
            <Text style={styles.labels}>Gender:</Text>
            <RNPickerSelect
                onValueChange={(itemValue) => setGender(itemValue)}
                items={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' }
                ]}
                value={gender}  // Make sure gender is either 'male', 'female', or null
                placeholder={{
                    label: 'Select Gender',
                    value: null,
                    color: '#9EA0A4'
                }}
            />

            <Text style={styles.labels}>Age:</Text>
            <TextInput
                style={styles.textbox}
                placeholder="Enter age"
                keyboardType="numeric"
                value={age}
                onChangeText={(text) => setAge(text)}
            />

            <Text style={styles.labels}>Weight (kg):</Text>
            <TextInput
                style={styles.textbox}
                placeholder="Enter weight"
                keyboardType="numeric"
                value={weight}
                onChangeText={(text) => setWeight(text)}
            />

            <Text style={styles.labels}>Height (cm):</Text>
            <TextInput
                style={styles.textbox}
                placeholder="Enter height"
                keyboardType="numeric"
                value={height}
                onChangeText={(text) => setHeight(text)}
            />

            <Text style={styles.labels}>Activity Level:</Text>
            <RNPickerSelect
                onValueChange={(itemValue) => setActivityLevel(itemValue)}
                items={[
                    { label: 'Sedentary', value: '1.2' },
                    { label: 'Light', value: '1.375' },
                    { label: 'Moderate', value: '1.55' },
                    { label: 'Active', value: '1.725' }
                ]}
                value={activityLevel}
                placeholder={{
                    label: 'Select Activity Level',
                    value: null,
                    color: '#9EA0A4'
                }}

            />

            <TouchableOpacity style={[styles.button, styles.topButton]}
                              onPress={calculateBMR}>
                <View style={styles.buttonContent}>

                    <Text style={styles.buttonText}>CALCULATE</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                              onPress={() => navigation.goBack()}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>GO BACK</Text>
                </View>
            </TouchableOpacity>




        </View>
    );
};

export default ResultPage;  // Export the renamed component