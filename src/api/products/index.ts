import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query"
import { supabase } from "src/lib/supabase"


export const useProductList = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const {data,error} = await supabase.from('products').select('*')    
          if(error){
            throw new Error(error.message)
          }
          return data
        }
      })
}

export const useInsertProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        async mutationFn(data:any) {
            const {data: newProduct,error} = await supabase.from('products').insert({
                title:data.name,
                imageUri: data.image,
                price: data.price
            })
            .single();
        
        if(error){
            throw new Error(error.message)
        }
        return newProduct
        },

        async onSuccess() {
            await queryClient.invalidateQueries(['products'])
        }
    })
}