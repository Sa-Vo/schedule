import React, { useState } from 'react';
import styled from 'styled-components';
import { GetCurDay } from '../../utilities/utileties';

const Button = styled.button`
    border: none;
    text-transform: uppercase;
    width: 8rem;
    height: 8rem;
    text-align: center;
    background: ${({ theme }) => theme.button};
    color: white;
    background-size: cover;
    transition: 0.5s;
    margin: 1rem;
    display: inline-block;
    border-radius: 5px;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    cursor: pointer;
    transition: 0.5s;
`;
const ButtonToggle = styled(Button)`
    opacity: 0.825;
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
    const [active, setActive] = useState(items[GetCurDay()]);
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
