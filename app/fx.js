#!/usr/local/apps/jdk/bin/jjs
var Button = Java.type("javafx.scene.control.Button");
var Scene  = Java.type("javafx.scene.Scene");
var StackPane  = Java.type("javafx.scene.layout.StackPane");

var button = new Button("Knock Knock");
button.onAction = function() print("Hello World!");

var root = new StackPane();
root.children.add(button);
$STAGE.scene = new Scene(root, 150, 75);
$STAGE.show();

