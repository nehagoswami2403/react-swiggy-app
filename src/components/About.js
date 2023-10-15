import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>this is swiggy app</h2>
            <UserClass name={"Neha"} location={"Bangalore"}
            contact={"nehagoswami2403"} />
        </div>
    )
}

export default About;