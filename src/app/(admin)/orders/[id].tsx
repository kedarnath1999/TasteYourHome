import orders from "assets/data/orders";
import {Stack,useLocalSearchParams} from 'expo-router'
import {Text, View, Pressable} from 'react-native'
import OrderListItem from "src/components/OrderListItem";
import Colors from "src/constants/Colors";

export default function OrderDetailsScreen() {
    const {id}  = useLocalSearchParams();
    const order = orders.find((o) => o.id.toString() === id)

    if(!order){
        return(
            <Text>Not Found</Text>
        )
    }

    return (
        <View style={{padding:10}}>
            <Stack.Screen options={{title:`Order #${id}`}} />
            <OrderListItem order={order}/>
            <Text style={{ fontWeight: 'bold' }}>Status</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                {["New","Cooking","Delivering","Delivered"].map((status) => (
                <Pressable
                    key={status}
                    onPress={() => console.warn('Update status')}
                    style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                        order.status === status
                        ? Colors.light.tint
                        : 'transparent',
                    }}
                >
                    <Text
                    style={{
                        color:
                        order.status === status ? 'white' : Colors.light.tint,
                    }}
                    >
                    {status}
                    </Text>
                </Pressable>
                ))}
            </View>
        </View>
    )
}