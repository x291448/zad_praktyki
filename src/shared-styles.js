import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 80px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      
      h1 {
        margin: 16px 0;
        color: #0D0D0D;
        font-size: 22px;
      }

      h3 {
        margin: 16px 0;
        color: #757575;
        font-size: 15px;
      }
      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
