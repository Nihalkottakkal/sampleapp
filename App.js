import React, { useState, useEffect } from 'react'
import { ScrollView, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Alert } from 'react-native'
import axios from 'axios'
import Modalview from './ModalView'
import Searchmodal from './Searchmodal'
import Icon from 'react-native-vector-icons/Feather'

const App = () => {


  const fetchData = async () => {
    await axios.get(`https://demo3365949.mockable.io/labours`)
      .then((res) => {
        setData(res.data.labours)
      })
  }


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchModal, setSearchModal] = useState(false)

  //labourData
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [filteredData, setFilteredData] = useState([])




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
      
      <Text style={styles.header}>
        Labours
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', width: '90%' }}>
        <TextInput style={styles.searchbar} placeholder="Search" placeholderTextColor="#818181"
          onChangeText={handleChange}
        />
        <View style={{ marginTop: 16, marginLeft: 2, width: 40, backgroundColor: '#91F3CF', borderRadius: 9, justifyContent: 'center', alignItems: 'center' }} >
          <Icon name="search" size={30} color="#000" style={{ height: 30, alignSelf: 'center' }} onPress={handleSearch} />
        </View>
      </View>

      {/* <TouchableOpacity style={{ height: 30, width: 250, backgroundColor: '#ddd' }}
        onPress={handleSearch}
      >
        <Text>
          search
        </Text>
      </TouchableOpacity> */}

      {searchModal &&
        <Searchmodal value={{ searchModal, setSearchModal, filteredData }} />
      }


      <View style={styles.labourView}>

        {data &&
          data.map((i) => {
            return (
              <TouchableOpacity key={i.id} style={styles.labours} onPress={() => { setIsModalOpen(true) }} activeOpacity={0.8}>
                <Text style={styles.name}>
                  {i.name}
                </Text>
                <Text style={styles.quantity}>
                  Quantity - {i.quantity} {i.unit}
                </Text>
              </TouchableOpacity>
            )
          })
        }

      </View>


    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
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
    width: '100%'
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
