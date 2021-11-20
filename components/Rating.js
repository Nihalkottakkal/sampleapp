import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'










const Rating = () => {



    const [defaultRating, setDefaultRating] = useState(0)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])




  



    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: '10%' }}>


            {
                maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => { setDefaultRating(item)}}>
                            <Icon name={item <= defaultRating ? 'star' : 'staro'} size={25} color='#FFB81C' style={{ margin: 3 }} />

                        </TouchableOpacity>
                    )
                })
            }
            <View style={{flexDirection:'row', marginLeft:'10%'}}>
            <Text style={{textAlignVertical:'center'}}>
                {defaultRating} 
            </Text>
            <Text style={{textAlignVertical:'center'}}>
                 /{maxRating.length}
            </Text>
            </View>

            
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({})
