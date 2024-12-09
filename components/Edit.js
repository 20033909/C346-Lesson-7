import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, Alert} from 'react-native';
import {dataSource} from "./datasource";
import RNPickerSelect from 'react-native-picker-select';
import {dataToDisplay} from "./dataToDisplay";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";


const Edit = ({route, navigation}) => {
    const [food, setFood] = useState(route.params.key);
    const [imageName, setImageName] = useState(route.params.image);
    const [Calorie, setCalorie] = useState(route.params.Calories);
    const [sectionIndex, setSectionIndex] = useState(null);


    const foodOptions = [
        {
            label: 'Edit Current',
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
                <Text style={styles.titleText}>Edit Food</Text>
                <Icon name="edit" size={60}  />
            </View>
            <Text style={styles.labels}>Select Another or Edit Current:</Text>
            <RNPickerSelect
                style={styles.rnPicker}
                value={sectionIndex}
                onValueChange={(value) =>
                    setSectionIndex(value)}
                items={foodOptions}  // The options are the items from dataSource
                placeholder={{
                    label: 'Select or edit current',
                    value: null,
                    color: '#9EA0A4'
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


            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 50, flex: 1, marginRight: 10 }}>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        let indexnum = 0;
                        if(route.params.type === "Lunch") {
                            indexnum = 1;
                        } else if(route.params.type === "Dinner") {
                            indexnum = 2;
                        }

                        if(sectionIndex === true) {
                            dataToDisplay[indexnum].data[route.params.index].key = food;
                            dataToDisplay[indexnum].data[route.params.index].image = imageName;
                            dataToDisplay[indexnum].data[route.params.index].Calories = Calorie;
                            navigation.navigate('Home');
                        } else if (sectionIndex === null) {
                            alert("Please check your selection. Some field(s) are empty.");
                        } else {
                            dataToDisplay[indexnum].data[route.params.index] = dataSource[sectionIndex];
                            navigation.navigate('Home');
                        }
                    }}>
                        <View style={styles.buttonContent}>

                            <Text style={styles.buttonText}>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 50, flex: 1 }}>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        let indexnum = 0;
                        if(route.params.type === "Lunch") {
                            indexnum = 1;
                        } else if(route.params.type === "Dinner") {
                            indexnum = 2;
                        }
                        Alert.alert("Are you sure?", '', [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    dataToDisplay[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate('Home');
                                }
                            },
                            {text: 'No'}
                        ]);
                    }}>
                        <View style={styles.buttonContent}>

                            <Text style={styles.buttonText}>DELETE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => navigation.goBack()}>
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>GO BACK</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );

};

export default Edit;