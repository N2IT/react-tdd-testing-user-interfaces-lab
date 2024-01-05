import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm Tony`", ()=> {
    
    //Arrange
    render (<App />)
    
    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })

    //Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with alt text identifying content of the image", () => {
    //Arrange
    render (<App />)

    //Act
    const imageOfMe = screen.getByAltText(/picture of me/i)
    
    //Assert
    expect(imageOfMe).toBeInTheDocument()
})

test("displays a second-level heading with the text `About Me`", () => {
    //Arrange
    render (<App />)

    //Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: true,
        level: 2,
    })

    //Assert 
    expect(secondLevelHeading).toBeInTheDocument()
})

test("displays 1 link to my GitHub page", () =>{
    //Arrange
    render(<App />)

    //Act
    const gitHubLink = screen.getByRole("link", { name: /github/i })
    
    //Assert
    expect(gitHubLink ).toBeInTheDocument()
})

test("displays 1 link to my linkedIn page", () =>{
    //Arrange
    render(<App />)

    //Act
    const linkedInLink = screen.getByRole("link", {name : /linkedin/i })
    
    //Assert
    expect(linkedInLink).toBeInTheDocument()
})