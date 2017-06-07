function addTextBox() {    
        var text = '<div><textarea name="textbox" id="textbox" cols="10" rows="1"> </textarea></div>',
        iframe = document.getElementById('iframeDiv');
        iframe.contentWindow.document.body.innerHTML = text;    
    }