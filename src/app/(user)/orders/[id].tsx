import orders from "assets/data/orders";
import {Stack,useLocalSearchParams} from 'expo-router'
import {Text, View} from 'react-native'
import OrderListItem from "src/components/OrderListItem";

export default function OrderDetailsScreen() {
    const {id}  = useLocalSearchParams();
    const order = orders.find((o) => o.id.toString() === id)

    if(!order){
        return(
            <Text>Not Found</Text>
        )
    }

    return (
        <View>
            <Stack.Screen options={{title:`Order #${id}`}} />
            <OrderListItem order={order}/>
        </View>
    )
}