import React, { useEffect, useState, } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, } from "react-native";
import { ProgressBar } from '@react-native-community/progress-bar-android';
import axios from "axios";
import Rating from './Rating'


const Modalview = (props) => {
  console.log(props.value.isModalOpen);

  const [data, setData] = useState({})
  const fetchData = async () => {
    await axios.get(`https://demo3365949.mockable.io/labour`)
      .then((res) => {
        console.log(res.data.labour);
        setData(res.data.labour)
      })
  }

  useEffect(() => {
    fetchData()

  }, [])
  const [modalVisible, setModalVisible] = useState(props.value.isModalOpen);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.value.isModalOpen
        }
        onRequestClose={() => props.value.setIsModalOpen(!props.value.isModalOpen)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalhead}>{data.name}</Text>
            <Text style={styles.modalText}>{data.description}</Text>
            <Text style={styles.modalText}>Quantity - {data.quantity} {data.unit}</Text>
            <Text style={styles.modalText}>Start Date - {data.startDate}</Text>
            <Text style={styles.modalText}>End Date - {data.endtDate}</Text>

            <Text style={{ fontWeight: 'bold', color: '#000' }}>Progress</Text>
            <ProgressBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.6}

            />
            <Text style={{ marginTop: 10, color: '#000', fontWeight: 'bold' }}>Feedback</Text>

            <Rating />


            <TouchableOpacity
              style={styles.button}
              onPress={() => props.value.setIsModalOpen(!props.value.isModalOpen)}
              activeOpacity={0.5}
            >

              <Text style={styles.textStyle}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
  button: {
    width: 240,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: "#58CD9D",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  modalhead: {
    fontWeight: 'bold',
    color: '#000'
  },

  modalText: {
    marginBottom: 15,
  },

  rating: {
    marginLeft: '-50%',
    marginBottom: '5%'
  }
});

export default Modalview;