import {useState} from "react";
import { Text, View,TextInput,Button, StyleSheet } from "react-native";
import { Link ,useRouter } from "expo-router";
import axios from "axios";
const Index: React.FC = () => {

const [username,setUsername] = useState<string>('')
const [password,setPassword] = useState<string>('')
const [errorMessage,setErrorMessage]= useState<string>('')
const router = useRouter();
//const dbusername :string = "abc@gmail.com" 
//const dbPassword : string = "password"
const handleOnSubmit = async(e: React.FormEvent) => {
   e.preventDefault();
   try{
      const res = await axios.post("http://localhost:5000/profile",{
        //switch local address of your machine to run this app on mobile android expo app metro waiting on exp://
       //const res = await axios.post("http://http://metro is waiting on exp/profile",{
   
         emailid: username,
         password: password,
        
      });
        console.log("inside profile :",res.data)
      if (res.status === 200) {
          router.push('/profile'); 
        
      }
        // else if (res.status === 400) {
        //   setErrorMessage('username or password is incorrect'); 
        //   console.log("message",errorMessage)
        //   console.log("inside view",errorMessage)
    //} 
   }catch(err){
        if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 400) {
          setErrorMessage(err.response.data); // Use the error message from the server
        } else {
          setErrorMessage('An unexpected error occurred');
        }
      } else {
        setErrorMessage('Network error');
      }
      console.log("Error:", err);
        
      
   }
      
//if(username === dbusername && password === dbPassword ){
    //router.push('/profile')
    //}
};
    return(
      <View style = {styles.container}>
       <Text>Email or username</Text>
       <TextInput  style  ={styles.input}value={username} onChangeText={setUsername} placeholder="Enter your username"/>
       <Text>Password</Text>
       <TextInput style = {styles.input}  value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry/>
       <Button title ='Login' onPress={handleOnSubmit}/> 
        <Link href="/forgotpwd">
        <Text>Forgot Password</Text>
      </Link>
         {errorMessage ? <Text style={styles.errorMsg}>{errorMessage}</Text> : null}
      </View>
    );

};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:16,

  },
  input: {
     height:40,
     borderColor:'gray',
     borderWidth:1,
     marginBottom:12,
     paddingLeft:8,
     width:'100%',
  },
  forgotpasswordfield:{
     paddingTop:35,
     fontSize:15
  },
   button:{
    marginTop:5
   },
    errorMsg: {
        color: 'red', 
        marginTop: 10,
    }
});
export default Index;