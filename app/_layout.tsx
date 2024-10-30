import { Stack } from "expo-router";

 export default function RootLayout() {
   return (
     <Stack>
      <Stack.Screen name="profile"  options={{title:'Profile'}} />
      <Stack.Screen name="forgotpwd"  options={{title:'Forgotpwd'}} />
     </Stack>
   );
 }
// import React, { useState } from 'react';
// import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
// import { Link, useRouter } from 'expo-router';

// const Index: React.FC = () => {
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const router = useRouter();

//   const handleOnSubmit = () => {
//     const dbUser: string = 'abc@gmail.com'; 
//     const dbpwd :string = 'password'
//     if (username === dbUser && password === dbpwd) {
//       router.push('/profile');
//     } else {
//       console.log('Login failed');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Email or Username</Text>
//       <TextInput
//         style={styles.input}
//         value={username}
//         onChangeText={setUsername}
//         placeholder="Please enter your username"
//       />
//       <Text>Password</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />
//       <Link href="/forgotpwd">
//         <Text>Forgot Password</Text>
//       </Link>
//       <Button title="Login" onPress={handleOnSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingLeft: 8,
//     width: '100%',
//   },
// });

// export default Index;
