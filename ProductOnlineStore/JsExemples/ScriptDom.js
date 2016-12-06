var arr = [1, 3, 6];
//document.write("array: " + arr);
var length = arr.push(9);
//document.write(" <br /> new array :" + arr);

// dom  get focus
function getfocus() {
    document.getElementById("button1").focus();

}
function loseFocus() {
    document.getElementById("button1").blur();
}
// exemple on-change
function OnChange() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function uppercaseFirstLetter() {
    
}
// mouse over
function mOver(obj) {
    obj.innerHTML = "Bla bla";
}

function mOut(obj) {
    obj.innerHTML = "Mouse over";
}
// filter
function checkValues(arr) {
    return arr >= 3;
}
// exemple splice
var cities = ["Iasi", "Cluj", "Bucharest"];
document.getElementById("1").innerHTML = cities;
function myFunction() {
    var removed = cities.splice(0, 1);
    document.getElementById("1").innerHTML = removed;
}
//Finding all the occurrences of an element
var indices = [];
var array = ['a', 'b', 'b', 'c', 'a', 'b', 'd'];
var element = 'a';

function FindOccurence() {
    var idx = array.indexOf(element);
    while (idx !== -1) {
        indices.push(element, idx + 1);
        idx = array.indexOf(element, idx + 1);
    }
}
console.log(indices);
// Finding if an element exists in the array or not and updating the array
function updateArray() {
    if (array.indexOf(element) !== -1) {
        array.push(element);
    }
     console.log('Element already exists');
}

// exemple foreach
demoP = document.getElementById("demoP");
function display(item, index) {
    demoP.innerHTML = demoP.innerHTML + "index[" + index + "]:" + item + "<br/>";
}
var removed = cities.splice(0, 1);
 document.getElementById('1').innerHTML = cities;

function FilterArray() {
    document.getElementById("demo").innerHTML = arr.filter(checkValues);
}
//arrays
var vehicles = ["Alto", "Swift", "BMW"];
//document.getElementById("sample").innerHTML = vehicles;
// select , options


//$(document).ready(function()
//{
//        var usa = [
//            { display: "Washington, D.C.", value: "WashingtonDC" },
//           { display: "Alaska", value: "Alaska" },
//           { display: "New York", value: "New-York" },
//           { display: "Florida", value: "Florida" },9
//           { display: "Hawaii", value: "Hawaii" },
//           { display: "California", value: "California" }
//        ];
        
//        var australia = [
//          { display: "Canberra", value: "Canberra" },
//          { display: "Sydney", value: "Sydney" },
//          { display: "Melbourne", value: "Melbourne" },
//          { display: "Perth", value: "Perth" },
//          { display: "Gold Coast ", value: "Gold-Coast" }];

//         var france = [
//        { display: "Paris", value: "Paris" },
//        { display: "Avignon", value: "Avignon" },
//        { display: "Strasbourg", value: "Strasbourg" },
//        { display: "Nice", value: "Nice" }];
//        $("#country").change(function() {
//                var select = $("#country option:selected").val();
//                switch (select) {
//                    case "usa": city(usa);
//                    case "AUSTRALIA":
//                        city(australia);
//                    case "FRANCE":
//                        city(france);
//                        break;
//                    default:
//                        $("#city").empty();
//                        $("#city").append("<option>--Select--</option>");
//                        break;
//                }
if (select !== "") {
    city(eval(select));
} else {
    $("#city").empty();
    $("#city").append("<option>--Select--</option>");
}

//            });
//        // to list out cities  cities in second element tag
//        function city(arr) {
//            $("#city").empty();
//            $("#city").append("<option>--Select--</option>");
//            $(arr).each(function(i) {
//                    $("#city").append("<option value =\"" + arr[i].value + "\">" + arr[i].display + "</option>");
//      });
//      }
//    });
