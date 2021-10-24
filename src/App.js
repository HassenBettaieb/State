

import React from 'react';
import './App.css';
import Profil from './component/Profil';

class App extends React.Component{
   state=
   {
     show:false
   }

  Shows=()=>{
this.setState({show:!this.state.show})
  }

render(){




return(
<div>
  
 <button  onClick={this.Shows} > Show  </button>
 {
   this.state.show && <Profil/>
 }
 
</div>


)
}


}

export default App;