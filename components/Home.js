import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, SectionList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { dataToDisplay } from './dataToDisplay'; // Import dataSource from dataSource.js
import ImageExistCheck from './ImageExistCheck';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Awesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    const renderItem = ({ item, index, section }) => {


        return (
            <TouchableOpacity
                style={styles.cat}
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

        // Set background color based on the title of the section
        if (title === 'Shorthair') {
            headerStyle = { ...headerStyle, ...styles.shortHairHeader };
        } else if (title === 'Longhair') {
            headerStyle = { ...headerStyle, ...styles.longHairHeader };
        }

        return (
            <View style={headerStyle}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
                <View style={styles.thickUnderline} />
            </View>
        );
    };

    return (
        <View style={styles.container}>


                <StatusBar style="auto" />




                <SectionList
                    sections={dataToDisplay}
                    keyExtractor={(item) => item.key }
                    renderItem={renderItem}  // Render each item using renderItem function
                    renderSectionHeader={renderSectionHeader}  // Custom header with conditional background color
                    contentContainerStyle={styles.scrollContainer}
                    //renderSectionFooter={}
                />

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Add');}}>
                    <View style={styles.buttonContent}>

                        <Text style={styles.buttonText}>Add Food</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ResultPage');}}>
                    <View style={styles.buttonContent}>

                        <Text style={styles.buttonText}>Calculate Calories</Text>

                    </View>
                </TouchableOpacity>

        </View>
    );
}

export default Home;