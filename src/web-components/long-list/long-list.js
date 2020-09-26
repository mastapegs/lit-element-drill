import { LitElement, html, css } from 'lit-element'

class LongList extends LitElement {

  static get styles() {
    return css`
      .container {
        width: 80%;
        margin: 0 auto;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
      }
      li {
        margin: 7px 0;
        border: 1px solid black;
        display: inline-block;
        flex: 1 1 10%;
        box-sizing: border-box;
        text-align: center;
        border-radius: 50%;
      }
    `
  }

  static get properties() {
    return {
      numbers: { type: Array }
    }
  }

  constructor() {
    super()
    this.numbers = []
    for (let number = 1; number < 101; number++) {
      this.numbers = [...this.numbers, number]
    }
    console.log(this.numbers)
  }

  render() {
    return html`
      <div class="container">
        <ul>
          ${this.numbers.map(number => html`<li>${number}</li>`)}
        </ul>
      </div>
    `
  }

}

customElements.define('long-list', LongList)