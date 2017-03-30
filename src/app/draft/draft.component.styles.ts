import { ellipsis } from 'polished';

function spreadOut(obj) {
  return Object.keys(obj)
    .map(k => `${k}: ${obj[k]};`)
    .join(' ');
}

export const CSS = `
  :host {
    display: block;
    background-color: #383838;
    /*border-bottom: 1px solid #ccc;*/
    position: relative;
    min-width: 30%;
    border: .5em solid #222;
  }

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  .draft-text {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .inner-container {
    box-sizing: border-box;
    padding: 1em 1em 2em 1em;
    height: 100%;
    width: 100%;
    border: 1px solid #383838;
  }
  .inner-container:hover {
    border: 1px solid #07b6ff;
  }
`;

