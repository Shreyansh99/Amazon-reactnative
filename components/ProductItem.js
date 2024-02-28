import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'



const ProductItem = ({item}) => {
 

  return (
    <Pressable  style={{marginHorizontal:20,marginVertical:25,}}>
     <Image style={{height:140,width:140,resizeMode:"contain"}} source={{uri:item?.image}}/>
     <Text numberOfLines={1} style={{width:140,marginTop:10}}>{item?.title}</Text>
     <View style={{flexDirection:"row",marginTop:5,alignItems:"center",justifyContent:"space-between"}}>
      <Text style={{fontSize:15,fontWeight:"bold"}}>{item?.price}</Text>
      <Text style={{color:"#FFC72C",fontWeight:"bold"}}>{item?.rating?.rate} ratings</Text>
     </View>
     <Pressable style={{backgroundColor:"#FFC72C",padding:10,borderRadius:20,justifyContent:"center",alignItems:"center",marginTop:10,marginHorizontal:10}}>
      <Text>Add to Cart</Text>
     </Pressable>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({})