import React from 'react'
import Rootlayout from './rootlayout/Rootlayout'

const App = () => {
  return (
     <BrowserRouter>
     
     <Routes>
      <Route element={<Rootlayout />}>
      
      </Route>
     </Routes>
     
     </BrowserRouter>
  )
}

export default App