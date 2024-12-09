import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7974',
        paddingHorizontal: 10,
        paddingTop: 31,




    },

    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
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


    },
    sectionHeaderText: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#fff', // White text for contrast

    },
    item: {


        flexDirection: 'row',  // Horizontal layout
        justifyContent: 'flex-end',  // Align to the right
        padding: 2.7,
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        alignItems: 'center',  // Vertically center the content
        width: '100%',  // Take up full width of the container




    },
    name: {
        fontSize: 14,
        flex: 4,
        textAlign: "center",
        fontWeight: "700"


    },
    kcal: {
        fontSize: 14,
        flex: 1,
        textAlign: "center",
        fontWeight: "500"


    },

    scrollContainer: {
        padding: 11,

    },


    image:{
        width: 68,
        height: 68,


    },
    labels: {

        marginVertical: 3.5,
        fontSize: 15,
        fontWeight: '600',
        color: '#351E10'
    },
    textbox: {
        borderWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 6.5,
    },
    addupdatebuttons:{
        marginVertical: 10,
    },

    rnPicker: {
        borderWidth: 1,
        borderColor: '#000',
    },
    thickUnderline: {
        height: 4,
        backgroundColor: '#fff',
        width: '37%',
        margin: 5,
        alignSelf: 'center'

    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 18
    },
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'sans-serif-condensed',
    },
    topButton: {
        marginTop: 40,
    },
    iconContainer: {
        flexDirection: 'row',  // Makes the icons appear in a row
        justifyContent: 'center',  // Centers the icons horizontally
        marginTop: 10,  // Adds some space between the title and icons
    },




});

export default styles;