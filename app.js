firebase.initializeApp(config);
var allData = [];
function add() {
    var val = document.getElementById('val');
    if (val.value == "") {
        alert("Please insert the data");
    }
    else {
        firebase.database().ref("Todo App").child("Value").push(val.value);
        // var list = document.getElementById('list');
        // var li = document.createElement('li');
        // var btn = document.createElement('button');
        // // var btnText = document.createTextNode('Delete');
        // var imag = document.createElement('img');
        // imag.src = "images.jpg";
        // imag.width = 50;
        // btn.appendChild(imag);
        // btn.onclick = function () {
        //     var li = this.parentNode;
        //     var ul = li.parentNode;
        //     ul.removeChild(li);
        // }
        // var text = document.createTextNode(val.value);
        // li.appendChild(text);
        // li.appendChild(btn);
        // list.appendChild(li);
        // val.value = "";
    }
}
function deleteAll() {
    document.getElementById('list').innerHTML = " ";
}
firebase.database().ref("Todo App").child("Value").on("child_added", (data) => {
    var obj = data.val();
    // obj.key= data.id;
    allData.push(obj);
    // console.log(obj);
    console.log(allData)
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
        // db.collection("Todo App").doc("Value").delete().then(function() {
        //     console.log("Document successfully deleted!");
        // }).catch(function(error) {
        //     console.error("Error removing document: ", error);
        // });
    }
    var text = document.createTextNode(obj);
    li.appendChild(text);
    li.appendChild(btn);
    list.appendChild(li);
    val.value = "";
});