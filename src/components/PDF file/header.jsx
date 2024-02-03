
import logo1 from '../../assets/logo.png'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: { // Adjust the height as needed
        width: 80,
        height: 80,
        marginRight: 30,
    },
    heading: {
        textAlign: 'center',
        fontSize: 22, // 2.5rem approximately
        color: '#00bcf9',
    },
    address: {
        textAlign: 'center',
        fontSize: 16, // 1rem approximately
        color: 'gray',
    },
    line: {
        borderBottom: '1px solid gray',
        marginTop: 10,
    },
    info: {
        fontSize: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cusInfo: {
        margin: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    column: {
        flex: 1,
    },
    columnText: {
        textAlign: 'center',
    },
    box: {
        border: '5px solid black',
        padding: 20
    }
});

function Head() {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logo} src={logo1} />
                <View>
                    <Text style={styles.heading}>ONECLICK DIGITAL - QUOTATION(S)</Text>
                    <Text style={styles.address}>R-613, Block 15, Dastagir, FB Area, Karachi - Pakistan</Text>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default Head;