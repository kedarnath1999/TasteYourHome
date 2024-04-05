import { Stack } from "expo-router";

export default function homeCooksLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Home cooks'}}/>
        </Stack>
    )
}