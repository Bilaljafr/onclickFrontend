import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
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
    heading1: {
        color: '#00bcf9',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default function CustInfo({name, email, phone, bName, bModel, bYear, bPrice, age, sAge, cAge, cName, cModel, cYear, cPrice, hospLimit}) {
    return (
        <View>
            <View>
                <Text style={styles.heading1}>Customer Information</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.cusInfo}>User Name: {name}</Text>
                <Text style={styles.cusInfo}>Email: {email}</Text>
                <Text style={styles.cusInfo}>Phone: {phone}</Text>
                {
                  bName ? 
                  <Text style={styles.cusInfo}>Bike Name: {bName}</Text>:
                  null
                }
                {
                    bModel ?
                    <Text style={styles.cusInfo}>Bike Model: {bModel}</Text>:
                    null
                }
                {
                    bYear ?
                    <Text style={styles.cusInfo}>Bike Year: {bYear}</Text>:
                    null
                }
                {
                    bPrice ?
                    <Text style={styles.cusInfo}>Bike Price: {bPrice}</Text>:
                    null
                }
                {
                    cName ?
                    <Text style={styles.cusInfo}>Car Name: {cName}</Text>:
                    null
                }
                {
                    cModel ?
                    <Text style={styles.cusInfo}>Car Model: {cModel}</Text>:
                    null
                }
                {
                    cYear ?
                    <Text style={styles.cusInfo}>Car Year: {cYear}</Text>:
                    null
                }
                {
                    cPrice ?
                    <Text style={styles.cusInfo}>Car Price: {cPrice}</Text>:
                    null
                }
                {
                    age ?
                    <Text style={styles.cusInfo}>{age}</Text>:
                    null
                }
                {
                    sAge ?
                    <Text style={styles.cusInfo}>Spouse age: {sAge}</Text>:
                    null
                }
                {
                    cAge ?
                    <Text style={styles.cusInfo}>Children age: {cAge}</Text>:
                    null
                }
                {
                    hospLimit ?
                    <Text style={styles.cusInfo}>Hospitalization Limit: {hospLimit}</Text>:
                    null
                }
            </View>
        </View>
    )
}