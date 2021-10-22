import * as React from 'react';
import { Button, View } from 'react-native';

export default function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Persona')}
          title="Go to notifications"
        />
      </View>
    );
  }