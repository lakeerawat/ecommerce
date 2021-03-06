import React from 'react';
import styled from 'styled-components';

export const Buttoncontainer = styled.button`
text-transform: capitalize; 
font-size: 1.4rem;
background:  ;
border: 0.2rem solid var(--lightBlue);
border-color: ${prop =>
prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightblue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop =>
prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;

}
`;
