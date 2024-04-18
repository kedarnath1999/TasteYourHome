import { Stack } from "expo-router";
import { View,Text } from "src/components/Themed";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from "react-native";
import Colors from "src/constants/Colors";
import { useCart } from "src/providers/CartProvider";
import { useAuth } from "src/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function homeCooksLayout() {

  const {items} = useCart();
  const {session} = useAuth();

  if(!session){
    return <Redirect href={'/'}/>
  }

  const numberOfItems = items.length
    return (
      <Stack
      screenOptions={{
        headerTintColor: Colors.light.text,
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome
                name="shopping-cart"
                size={25}
                color={Colors.light.text}
                style={{ marginRight: 15 }}
              />
              {numberOfItems > 0 && (
                <View style={{
                  position: 'absolute',
                  right: 10,
                  top: -3,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{ color: 'white', fontSize: 12 }}>{numberOfItems}</Text>
                </View>
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Taste Your Home' }} />
    </Stack>
    )
}