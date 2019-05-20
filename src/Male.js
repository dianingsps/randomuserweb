import React, {Component } from 'react';
    
class Male extends Component{
        constructor(props){
            super(props);
            this.state = {
                items: []
            };
        }
    
        componentDidMount(){
            fetch("https://randomuser.me/api/?gender=male&results=3")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                        id:`${data.id.name}`, 
                        location:`${data.location.state}`,
                        thumbnail: `${data.picture.large}`,
                        email:`${data.email}`,
                        username:`${data.login.username}`,
                        password:`${data.login.password}`
                }
            )))
            .then(items => this.setState({
                items,
                isloaded: false
            }))
            .catch(error => console.log('parsing failed', error))
        }
    render(){
        const {items} = this.state;
        return (
            <div className="boxWhite">
            {
                items.length > 0 ? items.map(item => {
                    const {id, firstName, lastName, location, thumbnail,email, username, password} = item;
                    return (
                        <div key={id} className="bgCircle">
                        <center>
                            <img src={thumbnail} alt={firstName} className="circle"/>
                        </center>
                        <br />
                        <div className="ctr">
                        {firstName} {lastName}<br />
                        {location} <br/>
                        {email} <br/>
                        {username} <br/>
                        {password}
                        </div>
                        </div>
                    );
                }) : null
            }
            </div>
        );
    }
}

export default Male;
