#!/bin/bash

create_directories_and_files() {
    for i in {2..11}; do
        dir_name="class $i"
        mkdir -p "$dir_name"

        html_content=$(cat <<HTML
<html>
    <head>
        <title>Object Oriented JavaScript</title>
        <style>
            h1{ 
                text-align: center; 
                color: #444; 
                font-family: 'Trebuchet MS';
                margin: 60px auto; 
            }
        </style>
    </head>
    <body>
        <h1>Object Oriented JavaScript</h1>
        <script src="main.js"></script>
    </body>
</html>
HTML
        )

        js_content="// Your JavaScript code goes here"

        echo "$html_content" > "$dir_name/index.html"
        echo "$js_content" > "$dir_name/main.js"
    done
}

create_directories_and_files

echo "Directories and files created successfully."
