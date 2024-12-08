import React, { useState } from 'react';
import { dataSource } from './datasource';
import {TextInput, View, Text, Button, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import {dataToDisplay} from "./dataToDisplay";

const Add = ({ navigation }) => {
    const [food, setFood] = useState('');
    const [imageName, setImageName] = useState('');
    const [Calorie, setCalorie] = useState("0");
    const [type, setType] = useState('Breakfast');
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
        <View style={styles.addupdateContainer}>
            <RNPickerSelect
                style={styles.rnPicker}
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Breakfast', value: 'Breakfast' },
                    { label: 'Lunch', value: 'Lunch' },
                    { label: 'Dinner', value: 'Dinner' },
                ]}
            />

            <Text style={styles.addupdatelabels}>Select Food or Create New:</Text>
            <RNPickerSelect
                style={styles.rnPicker}
                value={sectionIndex}
                onValueChange={(value) =>
                    setSectionIndex(value)}
                items={foodOptions}  // The options are the items from dataSource

            />


            {sectionIndex === true && (
                <View>
                    <Text style={styles.addupdatelabels}>Food:</Text>
                    <TextInput
                        style={{ borderWidth: 1, backgroundColor: '#fff' }}
                        onChangeText={(value) => setFood(value)}
                        value={food}
                    />

                    <Text style={styles.addupdatelabels}>Image Name:</Text>
                    <TextInput
                        style={{ borderWidth: 1, backgroundColor: '#fff' }}
                        onChangeText={(value) => setImageName(value)}
                        value={imageName}
                    />

                    <Text style={styles.addupdatelabels}>Calories:</Text>
                    <TextInput
                        style={{ borderWidth: 1, backgroundColor: '#fff', marginBottom: 50,}}
                        onChangeText={(numericValue) => setCalorie(numericValue)}
                        value={Calorie.toString()}
                    />
                </View>
            )}

            <Button
                title="Submit"
                onPress={() => {
                    let item = null;
                    if (sectionIndex === true){
                        item = { key: food, image: imageName, Calories: Calorie };
                    } else if (sectionIndex === null){
                        alert("Please check your selection");
                        return;
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

                }}
                color="salmon"
            />

        </View>
    );
};

export default Add;