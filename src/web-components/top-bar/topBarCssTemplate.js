import { css } from 'lit-element'

const titleShadow = 1

export default css`
  :host {
    display: block;
  }
  header {
    background: #2196f3;
    height: 70px;
    box-shadow: 0px 0px 10px 5px hsla(0, 0%, 0%, .5);
    display: flex;
    align-items: center;
    color: white;
  }
  [role="img"] {
    margin: 0 10px;
    font-size: 1.5em;
  }
  .title {
    font-weight: bold;
    font-size: 1.5em;
    text-shadow: ${titleShadow}px ${titleShadow}px ${titleShadow}px hsla(0, 0%, 0%, 0.5);
  }
`
