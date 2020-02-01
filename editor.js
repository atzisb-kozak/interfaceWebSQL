let editor=CodeMirror.fromTextArea
(document.getElementById("editor"),{
    mode:"sql",
    theme :"darcula",
    lineNumbers:true
});
console.log(editor);