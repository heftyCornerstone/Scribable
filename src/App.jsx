import router from "./shared/router"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
