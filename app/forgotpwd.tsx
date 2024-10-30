import {Text, View,TextInput,StyleSheet, Button} from 'react-native'
import { useState } from 'react'
import axios from 'axios';
import { Link ,useRouter } from "expo-router";
const Forgotpwdscreen:React.FC = () => {
    const [username ,setUserName]=useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password1, setPassword1] = useState<string>('');
    const[password2,setPassword2] = useState<string>('');
    const [errorMessage,setErrorMessage]= useState<string>('');
    const [sucessMessage ,setSucessMessage]= useState<string>('');

    const handleOnUpdate = async(e: React.FormEvent) =>{
      e.preventDefault();
       try{
        if(password1 === password2){
          const res = await axios.patch('http://localhost:5000/Update',{
            //switch local address of your machine to run this app on mobile android expo app metro waiting on exp://
            //const res = await axios.patch('http:// Metro waiting on exp:5000/Update',{
                emailid : username,
                password : password
            })
              setSucessMessage("password is updated sucessfully")
              console.log(res.data)
              console.log("Payload being sent:", { emailid: username, password });
         }else{
          console.error("password do not match")
         }
       }catch(err){
        if (axios.isAxiosError(err) && err.response) {
    if (err.response.status === 400) {
      // Assuming the error response is an object like { message: "error description" }
      setErrorMessage(err.response.data.message || 'An unexpected error occurred');
    } else {
      setErrorMessage('An unexpected error occurred');
    }
  } else {
    setErrorMessage('Network error');
  }
  console.log("Error:", err);
        
      
       }
    }
    return(
        <View style = {Styles.container}>
            <Text>Enter username</Text>
            <TextInput  style  = {Styles.input} value={username} onChangeText={setUserName} placeholder='Enter new username'/>
            <Text>Enter old password</Text>
            <TextInput style = {Styles.input} value={password} onChangeText={setPassword} placeholder='Enter old password' secureTextEntry/>
            <Text>Enter new password again</Text>
            <TextInput style= {Styles.input} value={password1} onChangeText={setPassword1} placeholder='Enter new password' secureTextEntry/>
            <Text>ReEnter new password again</Text>
            <TextInput style= {Styles.input} value={password2} onChangeText={setPassword2} placeholder='ReEnter new password' secureTextEntry/>
             <Button title='submit'onPress={handleOnUpdate}/>
           {sucessMessage?<Text style={Styles.sucessMsg}>{sucessMessage}</Text>:null} 
         {errorMessage ? <Text style={Styles.errorMsg}>{errorMessage}</Text> : null}
      </View>
  
    )
};
const Styles =StyleSheet.create({
   container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     padding:16
   },
   input:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:12,
    paddingLeft:8,
    width:'100%'
   },
   errorMsg: {
        color: 'red', 
        marginTop: 10,
    },
    successMsg:{
      color:'green',
      marginTop:10,
    }
});
export default Forgotpwdscreen;