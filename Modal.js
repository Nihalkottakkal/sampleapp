import React , {useState} from 'react'
import { StyleSheet, Text, View,Modal } from 'react-native'


const Modall = () => {

    const [modalOpen, setModalOpen] = useState(true)
    return (
        <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={()=>{setModalOpen(false)}}
            >
                <Text>
                    hii
                </Text>
            </Modal>
        </View>
    )
}

export default Modall

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
})
