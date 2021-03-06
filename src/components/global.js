import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: #152c40;
  }

  body {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-weight: 700;
       margin: 0;
  }

  p {
      margin: 0;
  }

  .DayBox{
    background-color: ${({ theme }) => theme.sideBar};
  }

  .LessonItem{
    background-color: ${({ theme }) => theme.item};
  }

  .LessonItem:hover{
    background-color: ${({ theme }) => theme.itemTime};
  }
  
  .ClockBox{
    background-color: ${({ theme }) => theme.clock};
  }

  .TimeBoxLesson{
    background-color: ${({ theme }) => theme.itemTime};
  }

  .LessonUrl{
    color: ${({ theme }) => theme.text};
  }

`;
