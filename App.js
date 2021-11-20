import React, { useState, useEffect } from 'react'
import { ScrollView, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Alert, Dimensions, ActivityIndicator } from 'react-native'
import axios from 'axios'
import Modalview from './components/ModalView'






const App = () => {



  //API FETCHING
  const [data, setData] = useState([])
  const fetchData = async () => {
    await axios.get(`https://demo3365949.mockable.io/labours`)
      .then((res) => {
        setData(res.data.labours)
        setLoading(true)
      })
  }



//MODAL VIEW
  const [isModalOpen, setIsModalOpen] = useState(false)

  

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)



  const [filteredData, setFilteredData] = useState([])
  const filteredValues = data.filter((i) => (
    i.toString().toLowerCase().includes(input.toString().toLowerCase())
  ))




  const handleChange = (e) => {
    setInput(e)
  }


  const handleSearch = () => {
    const filtered = data.filter((i) => {
      return (
        i.name === input
      )
    })
    console.log(filtered);
    setFilteredData(filtered)
    setSearchModal(true)
  }








  useEffect(() => {
    fetchData()
  }, [input])



  return (
    <ScrollView contentContainerStyle={styles.container}>


      
      {isModalOpen &&
        <Modalview value={{ isModalOpen, setIsModalOpen, }} />
      }

      {loading ?


        <View style={styles.container}>
          <Text style={styles.header}>
            Labours
          </Text>

          <TextInput style={styles.searchbar} placeholder="Search" placeholderTextColor="#818181"
            onChangeText={handleChange}
          />

          <View style={styles.labourView}>

            {data &&
              data.filter((i) => {
                if (input == '') {
                  return i.name
                }
                else if (i.name.toString().toLowerCase().includes(input.toString().toLowerCase())) {
                  return i.name
                }
              }).map((item) => {
                return (
                  <TouchableOpacity key={item.id} onPress={() => { setIsModalOpen(true) }}>
                    <View style={styles.labours}>
                      <Text style={styles.labourName}>{item.name}</Text>
                      <Text style={styles.labourQuantity}>Quantity - {item.quantity} {item.unit}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }


          </View>
        </View>


        :

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color='#000' />
        </View>

      }



    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  header: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '7%',
    fontWeight: 'bold'
  },

  searchbar: {
    padding: 5,
    width: '87%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingLeft: 10,
    textAlignVertical: 'center',
    fontSize: 10,
    justifyContent: 'center',
    marginTop: '5%',

  },

  labourView: {
    marginTop: '5%',
    width: '100%',
  },

  labours: {
    alignSelf: 'center',
    height: 60,
    width: '90%',
    backgroundColor: '#58CD9D',
    padding: 20,
    margin: 7,
    borderRadius: 10,
    justifyContent: 'center'
  },

  labourName: {
    color: '#fff',
    fontWeight: 'bold'
  },

  labourQuantity: {
    color: '#fff'
  },

  name: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

  quantity: {
    fontSize: 12,
    color: '#fff'
  }
})
