import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';

function Heading({head, head1}){
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#f0f2f5",
            textAlign: 'center',
            padding: 12
        },  
        heading: {
            color: '#00bcf9',
            fontSize: 16,
            marginTop: 10,
            marginBottom: 5
        },
        address: {
            fontSize: 16,
            marginBottom: 10
        }
    })
    return(
            <View style={styles.container}>
                <Text style={styles.heading}>{head}</Text>
                <Text style={styles.address}>{head1}</Text>
            </View>
    )
}
export default Heading