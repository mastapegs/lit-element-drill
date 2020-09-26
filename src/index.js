import { render, html } from 'lit-html'
import './drill-app'

render(html`
  <style>
    body {
      margin: 0;
      padding: 0;
      font: 16px/1.5 Arial, Helvetica, sans-serif;
      background-color: hsla(0, 0%, 80%, 1);
    }
  </style>
  <drill-app></drill-app>
`, document.body)