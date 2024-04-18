import { Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from "react-native";
import Colors from "src/constants/Colors";

export default function homeCooksLayout() {
    return (
        <Stack>
            <Stack.Screen 
              name="Food List"
              options={{
                title: 'Menu List',
                headerRight: () => (
                  <Link href="/(admin)/homeCooks/create" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <FontAwesome
                          name="plus-square-o"
                          size={25}
                          color={Colors.light.text}
                          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </Link>
                ),
              }}
            />
        </Stack>
    )
}