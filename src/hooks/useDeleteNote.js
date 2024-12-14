import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../api/supabaseApi";

const useDeleteNote = (id) => {
    const queryClient = useQueryClient();

    const { mutate: mutateMain } = useMutation({
        mutationFn: () => deleteNote(id),
        onSuccess: () => {
            queryClient.invalidateQueries([`main${id}`]);
        }
    })
    return mutateMain
}

export default useDeleteNote