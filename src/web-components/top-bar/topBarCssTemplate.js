import { css } from 'lit-element'

const titleShadow = 1

export default css`
  :host {
    display: block;
  }
  header {
    background: #43A047;
    height: 70px;
    box-shadow: 0px 0px 10px 5px hsla(0, 0%, 0%, .5);
    display: flex;
    align-items: center;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
  }
  [role="img"] {
    margin: 0 10px;
    font-size: 1.5em;
  }
  .title {
    font-weight: bold;
    font-size: 1.3em;
    text-shadow: ${titleShadow}px ${titleShadow}px ${titleShadow}px hsla(0, 0%, 0%, 0.5);
  }
  .spacer {
    margin-top: 100px;
  }
`
