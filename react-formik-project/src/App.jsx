import {ChakraProvider} from '@chakra-ui/react'

// Components
import YoutubeForm from "./components/YoutubeForm";

function App() {

  return (
    <ChakraProvider>
      <div className='App' style={{ display: 'flex', flexDirection: 'column', color: '#ffffff', backgroundColor: '#2a2a2a'}}>
        <YoutubeForm />
      </div>
    </ChakraProvider>
  )
}

export default App
