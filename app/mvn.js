#!/usr/local/apps/jdk/bin/jjs 
`ls /DevelopmentEnvironment/workspaces/workspace_kay_stream/`
	.trimRight()
	.split("\n")
	.filter(function(file){
		return file.startsWith("com.kay");
	}).forEach(function(file){
		print("cd "+file);
		print("mvn clean install");
		print("cd ..");
	});