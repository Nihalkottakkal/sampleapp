import React from 'react'
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Searchmodal = ({ value }) => {
    console.log(value);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={value.searchModal}
                onRequestClose={() => value.setSearchModal(!value.searchModal)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        {/* {value.filteredData.length === 0 ? <Text> no user with name </Text> : <Text> {value.filteredData[0].name} </Text> } */}
                        {value.filteredData.map((i, index) => {
                            if (index == null) {
                                return (
                                    <Text style={{ color: '#000' }}> no user found </Text>
                                )
                            }
                            else {
                                return (
                                    <TouchableOpacity key={i.id} onPress={() => value.setSearchModal(!value.searchModal)} key={i.padding}>
                                        <View style={{ height: 60, width: '90%', backgroundColor: '#58CD9D', alignSelf: 'center', padding: 20, margin: 7, borderRadius: 10, justifyContent: 'center' }} >

                                            <Text style={{ color: '#000' }}> {i.name} </Text>
                                            <Text style={{ color: '#000' }}> Quantity-  {i.quantity} {i.unit} </Text>

                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })}


                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Searchmodal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },

    modalView: {
        width: '100%',
        height: '100%',
        
        backgroundColor: "white",
        opacity: 0.9,
        
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})
