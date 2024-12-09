import React, { useState } from 'react';
import { dataSource } from './datasource';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import {dataToDisplay} from "./dataToDisplay";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Add = ({ navigation }) => {
    const [food, setFood] = useState('');
    const [imageName, setImageName] = useState('');
    const [Calorie, setCalorie] = useState("0");
    const [type, setType] = useState(null);
    const [sectionIndex, setSectionIndex] = useState(null); // To store selected index for the second picker


    // Generate the list of keys and their corresponding index from dataSource
    const foodOptions = [
        {
            label: 'Create New',
            value: true,
        },

        ...dataSource.map((item, index) => ({
            label: item.key,  // Using the key of each item
            value: index      // The index of the item in dataSource array
        }))
    ];

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Add Food</Text>
                <Icon name="plus-box-multiple-outline" size={60}  />
            </View>

            <Text style={styles.labels}>Select Food or Create New:</Text>
            <RNPickerSelect
                style={styles.rnPicker}
                value={sectionIndex}
                onValueChange={(value) =>
                    setSectionIndex(value)}
                items={foodOptions}
                placeholder={{
                    label: 'Select or create food',
                    value: null,
                    color: '#9EA0A4'
                }}

            />
            <Text style={styles.labels}>Select Meal Type:</Text>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Breakfast', value: 'Breakfast' },
                    { label: 'Lunch', value: 'Lunch' },
                    { label: 'Dinner', value: 'Dinner' },
                ]}
                placeholder={{
                    label: 'Select meal type',
                    value: null,
                    color: 'magenta'
                }}
            />


            {sectionIndex === true && (
                <View>
                    <Text style={styles.labels}>Food:</Text>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(value) => setFood(value)}
                        value={food}
                    />

                    <Text style={styles.labels}>Image Name:</Text>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(value) => setImageName(value)}
                        value={imageName}
                    />

                    <Text style={styles.labels}>Calories:</Text>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(numericValue) => setCalorie(numericValue)}
                        value={Calorie.toString()}
                    />
                </View>
            )}
            <TouchableOpacity style={[styles.button, styles.topButton]} onPress={() => {
                let item = null;
                if (type === null){
                    alert("Please check your selection. Some field(s) are empty.");
                    return;

                } else if (sectionIndex === true){
                    item = { key: food, image: imageName, Calories: Calorie };
                } else{
                    item = dataSource[sectionIndex];
                }

                // Create the new item object
                let index = 0;

                // Determine the section based on the type selected
                if (type === 'Lunch') {
                    index = 1;
                } else if (type === 'Dinner') {
                    index = 2;
                }

                // Add the new item to the appropriate section
                dataToDisplay[index].data.push(item);

                // Navigate back to the Home screen
                navigation.navigate('Home');

            }}>
                <View style={styles.buttonContent}>

                    <Text style={styles.buttonText}>SUBMIT</Text>
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

export default Add;