import * as React from "react";
import styled from "styled-components"

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};

const Container = styled.div `
    height: 100%;
    color: white;
    font-weight: bold;
    display: flex;
    align-items:center;
    padding: 20px 0;
    font-size: 20px;
`
// Define type of property
interface Props {
    region: string;
}

interface State {
    avatarName: string;
}

export class Name extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    region: "United States"
    }

    state = {
        avatarName: "Jane Doe"
    }

    componentDidMount = () => {
        const url = "https://uinames.com/api/?region =" + this.props.region
        fetch(url)
        .then(response => response.json()
        .then(response => {
            console.log(response.surname)
            this.setState({
                avatarName: response.name + " " + response.surname
            })
            
        }))
    }

    render() {
        
        
    return <Container>{this.state.avatarName} </Container>;
    }
}

export default Name