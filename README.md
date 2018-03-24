# find-island-algorithm


 Find the number of Islands inside a map.
 
 Given a grid (Matrix) structure, where 0 is water and 1 means land, provide the number of islands on the map.

- Example:
  ```json
  [
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ]
  ```
Should return 3


- Another example:
  ```json
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
  ```

The algorithm should only accept island unifications when it's vertical/horizontal, in this case, it should count only 2.
