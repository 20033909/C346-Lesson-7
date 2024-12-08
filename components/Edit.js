import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {dataSource} from "./datasource";
import RNPickerSelect from 'react-native-picker-select';
import {dataToDisplay} from "./dataToDisplay";

import styles from "./styles";


const Edit = ({route, navigation}) => {
    const [food, setFood] = useState(route.params.key);
    const [imageName, setImageName] = useState(route.params.image);
    const [Calorie, setCalorie] = useState(route.params.Calories);
    const [sectionIndex, setSectionIndex] = useState(null);
    useEffect(() => {
        console.log("Calorie value:", Calorie); // Print Calorie to the console
    }, [Calorie]);

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
        <View style={styles.addupdateContainer}>
            <Text style={styles.addupdatelabels}>Select Another or Edit:</Text>
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
                        style={{ borderWidth: 1, marginBottom: 50, backgroundColor: '#fff' }}
                        onChangeText={(numericValue) => setCalorie(numericValue)}
                        value={Calorie.toString()}
                    />
                </View>
            )}


            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 50, flex: 1, marginRight: 10 }}>
                    <Button
                        color="salmon"
                        title="SAVE"
                        onPress={() => {

                            let indexnum = 0;
                            if(route.params.type === "Lunch") {
                                indexnum = 1;
                            } else if(route.params.type === "Dinner") {
                                indexnum = 2;
                            }
                            if(sectionIndex === true){
                                dataToDisplay[indexnum].data[route.params.index].key = food;
                                dataToDisplay[indexnum].data[route.params.index].image = imageName;
                                dataToDisplay[indexnum].data[route.params.index].Calories = Calorie;
                                navigation.navigate('Home');
                            } else if (sectionIndex === null){
                                alert("Please check your selection");
                            } else {
                                dataToDisplay[indexnum].data[route.params.index]= dataSource[sectionIndex];
                                navigation.navigate('Home');
                            }


                        }}
                    />
                </View>
                <View style={{ marginTop: 50, flex: 1 }}>
                    <Button
                        color="salmon"
                        title="DELETE"
                        onPress={() => {
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
                        }}
                    />
                </View>
            </View>

        </View>
    );

};

export default Edit;