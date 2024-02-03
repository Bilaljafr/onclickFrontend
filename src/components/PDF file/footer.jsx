
import { Document, Page, StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: "100%", // Adjust this value based on your desired page height
        paddingBottom: 40, // Adjust this value based on your footer height
    },
    footer: {
        bottom: 0,
        left: 0,
        backgroundColor: '#f0f0f0',
        padding: 10,
        textAlign: 'center',
        fontSize: 12,
        color: "gray"
    },
});

function Foot1({ policy }) {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.footer}>
                    {/* Your fixed footer content */}
                    <Text>To buy our {policy} policy, visit our website or call</Text>
                    <Text>Website Link: www.theoneclickdigital.com</Text>
                    <Text>Email Us: info@theoneclickdigital.com</Text>
                    <Text>UAN: +92 33 1111 0375</Text>
                    <Text>Wh: +92 337 3301 875</Text>
                    <Text>DIRECT: +92 33 245 55 88</Text>
                </View>
            </Page>
        </Document>
    )
}
export default Foot1