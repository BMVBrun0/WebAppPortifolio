import React, { useRef } from 'react';
import { SafeAreaView, TouchableOpacity, Text, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const webViewRef = useRef(null);

  const handleGoBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  const handleWebViewNavigationStateChange = (newNavState) => {
    const canGoBack = newNavState.canGoBack;
    if (!canGoBack) {
      BackHandler.exitApp();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
      <Ionicons name="chevron-back" size={34} color="white" />
      </TouchableOpacity>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://unacted-shipments.000webhostapp.com/#about' }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </SafeAreaView>
  );
}
