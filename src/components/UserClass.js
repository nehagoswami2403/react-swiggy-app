import {Component} from "react"

//class based comp
class UserClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "name",
                loction: 'location'
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/nehagoswami2403");
        const json = await data.json();
        //api call
        console.log(json);

        this.setState( {
            userInfo: json,
        })

    }

    render() {
        const { login, created_at, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h1>Name: {login}</h1>
                <h2>Created at: {created_at}</h2>
                <h3>Contact: {login}</h3>
            </div>
        )
    }
}

export default UserClass;