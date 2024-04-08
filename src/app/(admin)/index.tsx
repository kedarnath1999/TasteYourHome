import { Redirect } from "expo-router";

export default function TabIndex() {
    const cookId = 1
    return <Redirect href={`/(admin)/homeCooks/${cookId}`}/>
}