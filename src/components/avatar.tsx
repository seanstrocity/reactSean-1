import * as React from "react";
import styled from "styled-components"

const Container = styled.div`
    height: 100px;
    width: 100px;
    background: url(${props => props.image});
    background-size: cover;
    border-radius: ${props => props.radius}px;
`

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

// Define type of property
interface Props {
    radius: Number;
}

interface State {
    photo:string;
}

export class Avatar extends React.Component<Props, State> {

    // Set default properties
    static defaultProps = {
        radius: 5
    }

    state = {
        photo:"https://uinames.com/api/photos/female/26.jpg"
    }
    // Items shown in property panel

    componentDidMount = () => {
        const url=" https://uinames.com/api/?ext"
        fetch(url)
        .then(response => response.json()
        .then(response => {
            console.log(response.photo)
            this.setState({
                photo: response.photo
            })
            
        }))
}

    render() {
       
        return <Container image={this.state.photo} radius = {this.props.radius}/>;
    }
}

export default Avatar