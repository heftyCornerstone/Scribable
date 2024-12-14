import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVersion } from "../api/supabaseApi";

const useDeleteVersion = (id) => {
    const queryClient = useQueryClient();
    
    const { mutate: mutateSub } = useMutation({
        mutationFn: () => deleteVersion(id),
        onSuccess: () => {
            queryClient.invalidateQueries([`sub${id}`]);
        }
    })
    return mutateSub
}

export default useDeleteVersion