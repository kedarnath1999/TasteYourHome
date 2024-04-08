import React from 'react';
import { View, Button } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10,gap:10 }}>
      {/* Use React Native's Button component */}
      <Link href={'/(user)'} style={{ marginBottom: 10 }} asChild>
          <Button title="User" onPress={() => {}} />
      </Link>
      <Link href={'/(admin)'} asChild>
          <Button title="Admin" onPress={() => {}} />
      </Link>
    </View>
  );
};

export default Index;
