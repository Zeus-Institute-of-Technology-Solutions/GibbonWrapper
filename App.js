import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // Create a reference to the webview
  const webviewRef = useRef(null);

  // Define a function to go back in the webview history
  function goBack() {
    webviewRef.current.goBack();
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.google.com' }}
        style={styles.webview}
      />
      <Button title="Back" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
