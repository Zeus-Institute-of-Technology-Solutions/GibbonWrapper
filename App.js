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

  // Define a function to go to the home page
  function goHome() {
    webviewRef.current.injectJavaScript('window.location.href = "https://mysoreskills.com";');
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'mysoreskills.com' }}
        style={styles.webview}
      />
      {/* Add a view to contain the buttons */}
      <View style={styles.buttons}>
        {/* Add a home button with an onPress handler */}
        <Button title="Home" onPress={goHome} />
        {/* Move the back button to the right side */}
        <Button title="Back" onPress={goBack} style={styles.back} />
      </View>
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
  // Add a style for the buttons view
  buttons: {
    flexDirection: 'row', // Use row layout
    justifyContent: 'space-between', // Space the buttons evenly
    margin: 10, // Add some margin
  },
  // Add a style for the back button
  back: {
    alignSelf: 'flex-end', // Align to the right
  },
});
