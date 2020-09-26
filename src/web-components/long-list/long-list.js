import { LitElement, html } from 'lit-element'

class LongList extends LitElement {

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
      <ul>
        ${this.numbers.map(number => html`<li>${number}</li>`)}
      </ul>
    `
  }

}

customElements.define('long-list', LongList)