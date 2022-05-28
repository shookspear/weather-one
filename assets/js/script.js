var cityResult = $("#city");
var tempResult = $("#temp");
var humidityResult = $("#humidity");
var windResult = $("#wind");
var main =$("#main");
var UVIndex = $("#UVIndex");
var APIKey = "APPID=dd99b9aa52a998e69136660979f9708d"; 
var url =  "https://api.openweathermap.org/data/3.0/onecall?";
var cities = JSON.parse(localStorage.getItem("Saved Cities")) || [];


$(document).ready(function (){
    var userInput = cities[cities.length - 1];
    
});

