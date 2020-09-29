import { LitElement, html } from 'lit-element';
import './web-components/top-bar/'
import './web-components/long-list/'
import './web-components/app-router/'

class DrillApp extends LitElement {

  render() {
    return html`
      <top-bar></top-bar>
      <long-list></long-list>
      <app-router></app-router>
    `;
  }

}

customElements.define('drill-app', DrillApp)