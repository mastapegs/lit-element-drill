import {css} from 'lit-element'

const gutter = 3

export default css`
  .container {
    width: 80%;
    margin: 0 auto;
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
    border: 2px solid hsla(0, 0%, 0%, 0.5);
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
    background: deepskyblue;
    color: white;
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5);
    box-shadow: 0px 0px 4px 1px hsla(0, 0%, 0%, 0.5);
  }
`