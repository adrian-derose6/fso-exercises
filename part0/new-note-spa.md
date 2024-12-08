```mermaid
    sequenceDiagram
      participant Browser
      participant Server

      Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa <br/> {content: "note content", date: "2019-05-25T15:15:59.905Z"}
      activate Server
      Note right of Browser: Send note JSON data
      Server -->> Browser: 201 status
      deactivate Server
      Note right of Browser: Browser rerenders list with new note
```
