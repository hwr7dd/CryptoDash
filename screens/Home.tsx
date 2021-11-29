import * as React from 'react';
import {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button} from 'react-native'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    const [isLoginVisible, setIsVisible] = useState(true);
    const [isInfoVisible,setInfoVisible]=useState(false);
    const [isLogoutVisibile,setIsVisible2]=useState(false);
    const toggleFunction = () => {
      setIsVisible(!isLoginVisible);
      setInfoVisible(true)
      setIsVisible2(true);
    };
    const toggleFunction2 = () => {
      setIsVisible2(!isLogoutVisibile);
      setIsVisible(false);
      setInfoVisible(false)

    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {isInfoVisible ?
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.canvas}>
          <View style={styles.textcontainer}>
            <Text style={styles.subtitle}><Text style={styles.bold}>Name: </Text>Harrison Reid</Text>
            <Text style={styles.subtitle}><Text style={styles.bold}>Email: </Text>test@test.com</Text>
            <Text style={styles.subtitle}><Text style={styles.bold}>Password: </Text>pass</Text>
            <Text style={styles.subtitle}><Text style={styles.bold}>Privledge: </Text>Admin</Text>

          </View>
          <View style={styles.itmcontainer}>
            <Icon
              raised
              reverseColor='black'
              name='user'
              type='font-awesome'
              color='Black'
              size= {100}
            />
        </View>
        </View>
        <View style={styles.logout}>
        <Button title="Log Out" onPress={toggleFunction2} />
        </View>
      </View>
       :   <View style={styles.buttoncont}>
       <View style={styles.buttonitems}>
         <Button style={styles.buttonitems} title="Log In" onPress={toggleFunction} />
       </View>
       <View style={styles.buttonitems}>
         <Button   title="Register" onPress={toggleFunction} />
       </View>
     </View>}   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  logout:{
    marginBottom:30
  },
  canvas:{
    flexDirection:'row',
    flex:1,
    width:"100%",
    borderRadius:15,
    borderColor:'black',
    borderWidth:15,
    marginBottom:100,
    marginTop:100
  },
  bold:{
    fontWeight:'bold',
  },
  header:{
    fontSize:100
  },
  textcontainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    margin:0

  
  },
  itmcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    margin:20,
    backgroundColor:'yellow'
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize:15
  },
  buttoncont:{
    flex:.1,
    flexDirection:'row',
  },
  buttonitems:{
    margin:20,
    fontSize:15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
