import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ReadNote from "../pages/ReadNote";
import WriteNote from "../pages/WriteNote";
import NoteVersions from "../pages/NoteVersions";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        element: <Layout />,
        children:[
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/read-note/:versionId',
                element: <ReadNote />,
            },
            {
                path: '/write/:writeMode',
                element: <WriteNote />,
            },
            {
                path: '/note-versions/:noteId',
                element: <NoteVersions />,
            }
        ]
    },
])

export default router