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
