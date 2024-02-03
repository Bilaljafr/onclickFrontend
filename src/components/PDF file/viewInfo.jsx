import logo1 from '../../assets/logo.png'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    logo: { // Adjust the height as needed
        width: 80,
        height: 80,
        marginRight: 30,
    },
    heading1: {
        textAlign: 'center',
        fontSize: 18, // 2.5rem approximately
        color: 'gray',
    },
    heading: {
        textAlign: 'center',
        fontSize: 22, // 2.5rem approximately
        color: '#00bcf9',
    },
    line: {
        borderBottom: '1px solid gray',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        flex: 1,
    },
    columnText: {
        fontSize: 10,
        textAlign: 'center',
    },
    box: {
        backgroundColor: '#f0f2f5',
        padding: 5,
        marginTop: 10, 
        borderRadius: 5
    }
});


function ViewInfo({imgSrc, heading, hosipital, room_ent, pre_post_hosp, romm_board, critical_ill, increase_lim, rate, rupees, tracker, withTracker}) {
    return (
        <View style={styles.box}>
            <Text style={styles.heading1}>{heading}</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    {
                        imgSrc ?
                        <Image style={styles.logo} src={imgSrc} />:
                        null
                    }
                    
                </View>
                <View style={styles.column}>
                    {
                        hosipital ?
                        <Text style={styles.columnText}>Hospital limit: {hosipital} -/person</Text>:
                        null
                    }
                    {
                        room_ent ?
                        <Text style={styles.columnText}>Room entitlement: {room_ent} -/person</Text>:
                        null
                    }
                    {
                        pre_post_hosp ?   
                        <Text style={styles.columnText}>Pre & Post Hospitalization Benefits: {pre_post_hosp} -/person</Text> :
                        null
                    }
                    {
                        romm_board ?
                        <Text style={styles.columnText}>Room & Board: {romm_board} -/person</Text> :
                        null
                    }
                    {
                        critical_ill ?
                        <Text style={styles.columnText}>Critical illness limit: {critical_ill} -/person</Text> :
                        null
                    }
                    {
                        increase_lim ?
                        <Text style={styles.columnText}>Increase in limit (dueToAccidents): {increase_lim} -/person</Text> :
                        null
                    }
                    {
                        rate ?
                        <Text style={styles.columnText}>Rate: {rate}%</Text> :
                        null
                    }
                    {
                        tracker ?
                        <Text style={styles.columnText}>Tracker Price: {tracker}</Text> :
                        null
                    }
                    {
                        withTracker ?
                        <Text style={styles.columnText}>With tracker Amount: {withTracker} -/ PKR</Text> :
                        null
                    }
                </View>
                <View style={styles.column}>
                    {
                        rupees ?
                        <Text style={styles.columnText}>{rupees} -/ PKR</Text>:
                        null
                    }
                    
                </View>
            </View>
        </View>
    )
}

export default ViewInfo