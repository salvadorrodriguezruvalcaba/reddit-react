1. Setup Redux
  - create the store, pass it to provider
    ```
    {
      API: {
        status: [`idle`, `pending`, `success`, `error`],
        results: [],
        filteredTopics: []
      },
      modal: {
        open: false
      },
      dragAndDrop: {
        // TODO
      },
    }
    ```
  - hook up DevTools & logger
