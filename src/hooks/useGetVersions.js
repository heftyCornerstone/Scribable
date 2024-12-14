import { useQueries } from "@tanstack/react-query";
import { getNoteVersions } from "../api/supabaseApi";


const useGetVersions = (noteId) => {
    const [mainVerData, subVerData] = useQueries({
        queries: [
            { queryKey: [`main${noteId}`], queryFn: () => getNoteVersions(noteId, true) },
            { queryKey: [`sub${noteId}`], queryFn: () => getNoteVersions(noteId) },
        ]
    });
    const { data: mainVersion, isPending: isMainPending, isError: isMainError } = mainVerData;
    const { data: subVersions, isPending: isSubPending, isError: isSubError } = subVerData;
    const isVersionPending = !!(isMainPending || isSubPending);
    const isVersionError = !!(isMainError || isSubError);

    return { mainVersion, subVersions, isVersionPending, isVersionError }
}

export default useGetVersions