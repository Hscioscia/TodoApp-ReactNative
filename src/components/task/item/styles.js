import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#9fb4c7',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        marginVertical: 5,
    },
    listItem: {
        fontSize: 15,
        color: '#212121',
        paddingHorizontal: 10,
    },
});