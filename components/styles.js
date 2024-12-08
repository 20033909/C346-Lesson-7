import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7974',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {

        backgroundColor: '#fff',


        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {

        flexDirection: 'row',  // Arrange the content horizontally (row)
        justifyContent: 'space-between', // Distribute space between the icons and text
        alignItems: 'center', // Vertically center the items
        width: '90%', // Make the container take up full width
    },
    buttonText: {
        fontWeight: "800",
        fontFamily: 'sans-serif-condensed',
        color: 'blue',
        fontSize: 25,
        textAlign: 'center',
        flex: 1, // Allow the text to take up the remaining space
    },
    iconSizeColor: {
        fontSize: 30,
        color: 'purple',
        transform: [
            { rotate: '45deg' }, // Rotates the icon by 45 degrees by default
        ]
    },
    iconSizeColor2: {
        fontSize: 33, // Icon size
        color: 'purple', // Icon color (white in this case)
    },
    sectionHeader: {
        padding: 8.5,
        width: '100%',


    },
    sectionHeaderText: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#fff', // White text for contrast

    },
    cat: {


        flexDirection: 'row',  // Horizontal layout
        justifyContent: 'flex-end',  // Align to the right
        padding: 2.7,
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        alignItems: 'center',  // Vertically center the content
        width: '100%',  // Take up full width of the container


    },
    name: {
        fontSize: 15,
        flex: 4,
        textAlign: "center",
        fontWeight: "700"


    },
    kcal: {
        fontSize: 15,
        flex: 1,
        textAlign: "center",
        fontWeight: "500"


    },

    scrollContainer: {
        padding: 11,

    },
    shortHairHeader: {
        backgroundColor: 'red',  // Red background for Fire Type
    },
    longHairHeader: {
        backgroundColor: 'gold'  // Yellow background for Lightning Type
    },
    addupdateContainer: {
        padding: 20,
        backgroundColor: '#ed556a',
        flex: 1
    },
    image:{
        width: 68,
        height: 68,


    },
    addupdatelabels: {
        fontWeight: '300',
        fontFamily: 'Arial',
        marginVertical: 10,
        fontSize: 20
    },
    addupdatebuttons:{
        marginVertical: 10,
    },

    rnPicker: {
        borderWidth: 1,
        borderColor: '#000',
    },
    thickUnderline: {
        height: 4, // This controls the thickness of the underline
        backgroundColor: '#fff', // Color of the underline
        width: '37%', // Full width under the text
        marginTop: 3, // Space between the text and the underline
        alignSelf: 'center'

    },




});

export default styles;