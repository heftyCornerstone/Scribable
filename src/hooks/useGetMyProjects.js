import { useQuery } from "@tanstack/react-query"
import { getNotesByAuthorId } from "../api/supabaseApi"

const useGetMyProjects = (authorId) => { 
    const { data: notes, isPending, isError } = useQuery({
        queryKey: ["myProjects"],
        queryFn: () => getNotesByAuthorId(authorId),
    })

    return { notes, isPending, isError }
}

export default useGetMyProjects;