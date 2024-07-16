import React from 'react'
import LikeButton from './components/LikeButton';
import ColorTheme from './components/ColorTheme';
import ComponetParent from './components/ComponetParent';


const App = () =>  {

	return(

    <div className="flex flex-col justify-center items-center h-[100vh] gap-20">
    <div><LikeButton/></div>

    <div>

      <ColorTheme/>
    </div>

    <div>
      <ComponetParent/>
    </div>
    
      

    </div>
    



  )
}

export default App
