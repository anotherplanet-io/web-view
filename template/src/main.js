import React from 'react'
import { render } from 'react-sketchapp'
import { createWebview } from './utils'

const data = {
  msg: 'It’s Rocks 🚀'
}

export default function(context) {
  let webUI;
  const handlers = {
    nativeLog(s) {
      context.document.showMessage(s)
      //webUI.eval(`setRandomNumber(${Math.random()})`)
      webUI.close();
    },
    webviewLoaded(msg) {
      // send data..
      webUI.eval(`updateData('${JSON.stringify(data)}')`);
      context.document.showMessage('I am loaded 🚀');
    }
  }

  webUI = createWebview(context, handlers, 'Another Planet');
  context.document.showMessage("It's alive 🖖");
}
