import react from 'react';
import React from 'react';





class Profil extends react.Component{
    state = {
        count : 0 ,
    Person:{
        fullName :"hssan bettaieb",
        bio:"I’m an ingineer. ",
        imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/250px-Lionel_Messi_20180626.jpg" ,
        profession:"Web Developer"}
    }

        componentDidMount() {
           const intervalId = setInterval(() => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
            },1000)
         
        }
       /* componentWillUnmount(){
            clearInterval(intervalId)

        }*/

    render(){


return (
<div className="user">
<h1>{this.state.count}</h1>
<h1>{this.state.Person.fullName}</h1>
<p>{this.state.Person.bio}</p>
<img   src={this.state.Person.imgSrc} alt="messi" width="350px"/>
<h3>{this.state.Person.profession}</h3>
</div>

)


    }
}


export default Profil;