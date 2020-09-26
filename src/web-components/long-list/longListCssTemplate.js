import { css } from 'lit-element'

const gutter = 3

export default css`
  .container {
    width: 80%;
    margin: 0 auto;
    max-width: 768px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    column-gap: ${gutter}px;
    row-gap: ${gutter}px;
  }
  li {
    margin: 7px 0;
    border: 1px solid hsla(0, 0%, 0%, 0.5);
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border-radius: 30%;
    background: #3949AB;
    color: white;
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.3);
    box-shadow: 0px 0px 3px 1px hsla(0, 0%, 0%, 0.5);
  }
`