import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from'react-native-webview';
export default function App() {
 // render(); {
    return (
      <WebView
      source={{ uri: 'google.com' }}
      style={{ marginTop: 20 }}
      />
    );
//}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
