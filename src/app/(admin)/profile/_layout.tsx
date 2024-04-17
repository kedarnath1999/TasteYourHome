import { Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from "react-native";
import Colors from "src/constants/Colors";

export default function ProfileLayout() {
    return (
        <Stack
        >
            <Stack.Screen name="index" options={{title:'Profile'}}/>
        </Stack>
    )
}