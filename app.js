function add() {
    var val = document.getElementById('val');
    if (val.value == "") {
        alert("Please insert the data");
    }
    else {
        var list = document.getElementById('list');
        var li = document.createElement('li');
        var btn = document.createElement('button');
        // var btnText = document.createTextNode('Delete');
        var imag = document.createElement('img');
        imag.src = "images.jpg";
        imag.width = 50;
        btn.appendChild(imag);
        btn.onclick = function () {
            var li = this.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }
        var text = document.createTextNode(val.value);
        li.appendChild(text);
        li.appendChild(btn);
        list.appendChild(li);
        val.value = "";
    }
}
function deleteAll() {
    document.getElementById('list').innerHTML = " ";
}
