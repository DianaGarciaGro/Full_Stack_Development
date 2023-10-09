sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks "Save"

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note over server: Server process the  post request and saves the new note.
    server -->> browser: 200 ok
    desactivate server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server -->> browser: HTML document
    desactivate server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -->> browser: css file
    desactivate server

    browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server -->> browser: JavaScript file
    desactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser ->> server: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -->> browser: data json file
    desactivate server: [{ "content": "New Note", "date": "2023-1-1" }, ... ]

    Note right of browser: Browser executes the callback function that renders the updated notes
