import { LitElement, html, css } from 'lit-element'
import cssTemplate from './longListCssTemplate'

class LongList extends LitElement {

  static get styles() {
    return css`${cssTemplate}`
  }

  static get properties() {
    return {
      numbers: { type: Array }
    }
  }

  constructor() {
    super()
    this.numbers = []
    for (let number = 1; number <= 1000; number++) {
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