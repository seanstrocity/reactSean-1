
import * as React from "react";
import styled from "styled-components"

const icons = [
    {
        "name": "close",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 1 C 20 1.552 19.552 2 19 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(2 11) rotate(45 10 1)" fill="#FFFFFF"></path><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 1 C 20 1.552 19.552 2 19 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(2 11) rotate(-45 10 1)" fill="#FFFFFF"></path></svg>
    },
    {
        "name": "heart",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 8.5 10 L 12.5 14 L 16.5 10" fill="transparent" stroke-width="8" stroke="#FFFFFF" stroke-linecap="round"></path></svg>
    },
    {
        "name" : "progress",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 Z" fill="transparent" stroke-width="2" stroke="#FFFFFF" stroke-linecap="round" stroke-dasharray="38"></path></svg>,
    },
    {
        "name" : "home",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 11.321 4.127 C 11.705 3.773 12.295 3.773 12.679 4.127 L 19.282 10.226 C 19.49 10.418 19.606 10.69 19.603 10.973 L 19.512 18.512 C 19.505 19.06 19.06 19.5 18.512 19.5 L 17 19.5 C 16.448 19.5 16 19.052 16 18.5 L 16 14 C 16 13.448 15.552 13 15 13 L 13 13 C 12.448 13 12 13.448 12 14 L 12 18.5 C 12 19.052 11.552 19.5 11 19.5 L 5.488 19.5 C 4.94 19.5 4.495 19.06 4.488 18.512 L 4.397 10.973 C 4.394 10.69 4.51 10.418 4.718 10.226 Z" fill="#FFFFFF"></path></svg>,
    },
    {
        "name" : "settings",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 11.403 20.398 C 11.175 19.277 9.726 18.967 9.065 19.899 C 8.679 20.442 7.83 20.062 7.973 19.411 C 8.22 18.293 7.021 17.418 6.04 17.999 C 5.468 18.337 4.845 17.643 5.24 17.106 C 5.918 16.186 5.177 14.896 4.046 15.026 C 3.386 15.102 3.098 14.212 3.676 13.884 C 4.668 13.32 4.513 11.839 3.427 11.495 C 2.793 11.294 2.89 10.364 3.551 10.3 C 4.685 10.191 5.143 8.775 4.29 8.016 C 3.793 7.574 4.258 6.764 4.887 6.976 C 5.968 7.339 6.959 6.233 6.486 5.191 C 6.211 4.583 6.963 4.034 7.453 4.485 C 8.293 5.258 9.646 4.653 9.636 3.508 C 9.631 2.84 10.54 2.646 10.805 3.258 C 11.259 4.308 12.741 4.308 13.195 3.258 C 13.46 2.646 14.369 2.84 14.364 3.508 C 14.354 4.653 15.707 5.258 16.547 4.485 C 17.037 4.034 17.789 4.583 17.514 5.191 C 17.041 6.233 18.032 7.339 19.113 6.976 C 19.742 6.764 20.207 7.574 19.71 8.016 C 18.857 8.775 19.315 10.191 20.449 10.3 C 21.11 10.364 21.207 11.294 20.573 11.495 C 19.487 11.839 19.332 13.32 20.324 13.884 C 20.902 14.212 20.614 15.102 19.954 15.026 C 18.823 14.896 18.082 16.186 18.76 17.106 C 19.155 17.643 18.532 18.337 17.96 17.999 C 16.979 17.418 15.78 18.293 16.027 19.411 C 16.17 20.062 15.321 20.442 14.935 19.899 C 14.274 18.967 12.825 19.277 12.597 20.398 C 12.465 21.053 11.535 21.053 11.403 20.398 Z M 12 17.573 C 15.174 17.573 17.747 14.987 17.747 11.797 C 17.747 8.607 15.174 6.02 12 6.02 C 8.826 6.02 6.253 8.607 6.253 11.797 C 6.253 14.987 8.826 17.573 12 17.573 Z" fill="#FFFFFF"></path></svg>,
    },
]

var iconNames = []
for (var index =0; index < icons.length; index++){
    iconNames.push(icons[index]["name"])
}

//style for the component container display
const Container = styled.div `
    height: 100%;
    display:grid;
    align-items: center;
    justify-items: center;
`

// Define type of property
interface Props {
    name: string;
}

interface State {
    svg: any;
}

export class Icon extends React.Component<Props, State> {

    // Set default properties
    static defaultProps = {
    name: icons[0]["name"]
    }

    state = {
        svg: icons[0]["svg"]
    }
 

    // the logic for when you 
    render() {
        icons.map(icon =>{
            if(icon.name == this.props.name)
                this.state.svg = icon.svg
        })

    return <Container>{this.state.svg}</Container>;
    }
}

export default Icon
