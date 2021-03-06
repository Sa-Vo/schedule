import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    text-transform: uppercase;
    width: 8rem;
    height: 8rem;
    text-align: center;
    background-color: #ff7043;
    color: white;
    background-size: cover;
    transition: 0.5s;
    margin: 1rem;
    display: inline-block;
    border-radius: 5px;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    cursor: pointer;
    transition: 0.5s;
`;
const ButtonToggle = styled(Button)`
    opacity: 0.6;
    ${({ active }) =>
        active &&
        `
    opacity: 1;
    outline: none;
    width: 10rem;
    height: 10rem;
    transition: 0.5s;
  `}
`;

export default function ToggleBtnPanel({ getActiveIdx, items }) {
    const [active, setActive] = useState(items[0]);
    return (
        <>
            {items.map((item, idx) => (
                <ButtonToggle
                    key={item.id}
                    active={active === item}
                    onClick={() => {
                        setActive(item);
                        getActiveIdx(idx);
                    }}
                >
                    {item.shortName}
                </ButtonToggle>
            ))}
        </>
    );
}
