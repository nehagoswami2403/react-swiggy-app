import React from "react"

//class based comp
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                    
                }}>Count increase</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default UserClass;