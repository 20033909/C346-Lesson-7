import React, {useState} from 'react';
import { Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';
import { dataToDisplay as initialData } from './dataToDisplay'; // Import dataSource from dataSource.js
import ImageExistCheck from './ImageExistCheck';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation, route }) => {
    const [dataToDisplay, setDataToDisplay] = useState(initialData);

    const renderItem = ({ item, index, section }) => {
        let imageName = null;

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() =>
                    navigation.navigate('Edit', {
                        index: index,
                        type: section.title,
                        key: item.key,
                        image: item.image,
                        Calories: item.Calories,
                    })
                }
            >
                <ImageExistCheck imageName={item.image} />
                <Text style={styles.name}>{item.key}</Text>
                <Text style={styles.kcal}>{item.Calories} Cal.</Text>
            </TouchableOpacity>
        );
    };

    // Render the section header with a conditional background color
    const renderSectionHeader = ({ section: { title } }) => {
        let headerStyle = styles.sectionHeader; // Default section header style



        return (
            <View style={styles.headerStyle}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
                <View style={styles.thickUnderline} />
            </View>
        );
    };
    const renderTitle = () => {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Daily Calorie Planner</Text>
                <View style={styles.iconContainer}>
                    <Icon name="emoji-food-beverage" size={60}  />

                    <Icon name="set-meal" size={60}  />

                    <IconTwo name="silverware-fork-knife" size={60}  />


                </View>

            </View>
        );
    };

    // Footer component for the buttons
    const renderFooter = () => (
        <View style={styles.topButton}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Add'); }}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Add Food</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ResultPage'); }}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Calculate Calories</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Alert.alert("Are you sure?", 'This will delete all sections and their items.', [
                        {
                            text: 'Yes',
                            onPress: () => {
                                // Create a copy of the dataToDisplay array
                                let updatedData = [...dataToDisplay];

                                // Clear the data array for all sections
                                updatedData.forEach(section => {
                                    section.data = []; // Empty the `data` array for each section
                                });

                                // Update state with the modified data
                                setDataToDisplay(updatedData);

                            }
                        },
                        { text: 'No' }
                    ]);
                }}
            >
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Delete All</Text>
                </View>
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={styles.container}>

                <SectionList
                    ListHeaderComponent={renderTitle}
                    sections={dataToDisplay}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}  // Render each item using renderItem function
                    renderSectionHeader={renderSectionHeader}  // Custom header with conditional background color
                    contentContainerStyle={styles.scrollContainer}
                    ListFooterComponent={renderFooter}  // Add buttons as footer
                />

        </View>
    );
}

export default Home;