'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate() {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-console-log:convert': () => this.convert()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();
      editor.insertText(`console.log('=>${selection}', ${selection})`);
    }
  }

};
