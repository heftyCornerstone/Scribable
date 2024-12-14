import { useQuery } from "@tanstack/react-query";
import { getVersionById } from "../api/supabaseApi";

const useGetVersionById = (versionId) => { 
    const { data: note, isPending, isError } = useQuery({
        queryKey: [`note${versionId}`],
        queryFn: () => getVersionById(versionId)
    });
    return { note, isPending, isError }
}

export default useGetVersionById