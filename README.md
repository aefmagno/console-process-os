# console-process-os

Once the program starts it is timed using `console.time` method and checks the OS using `os.type` method
it then asks input from the user using `process.stdin`
the input is transformed into base64 and displayed in the terminal using `process.stdout`
once the user exits the program, the total time elapsed is showed in seconds using `console.timeEnd` method
