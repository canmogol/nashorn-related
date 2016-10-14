#!/usr/local/apps/jdk/bin/jjs -scripting

var path='/DevelopmentEnvironment/workspaces/workspace_kay_stream/';
$ENV.PWD=path;

`ls`
	.trimRight()
	.split("\n")
	.filter(function(file){
		return file.startsWith("com.kay");
	}).forEach(function(file){
		$ENV.PWD=path+file;
		$EXEC("mvn clean install");
		print($OUT);
	});
