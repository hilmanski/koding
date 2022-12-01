// For live editor

function liveCode(event, id) {
    event.preventDefault();
    console.log(id)

    const textarea = document.getElementById(`textarea-${id}`)
    const sourceCode = textarea.value;

    let iframe = document.getElementById(`iframe-${id}`);
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(sourceCode);
    iframe.document.close();
    return false;
}
