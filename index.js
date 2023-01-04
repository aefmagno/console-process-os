import { Transform } from 'node:stream'
import os from 'node:os'

console.time()

if (os.type() !== 'Darwin') {
  console.error(`Invalid OS Type.\nRequired OS Type: Darwin.\nCurrent OS Type: ${os.type}.`)
  process.exit(1)
}

console.log(`Good Day ${os.hostname()}\nPlease Input Something in the Terminal`)
console.log('Type "quit" to Exit Program')

const transform = new Transform({
  transform(data, encoding, callback) {
    const base64 = data.toString('base64')
    const lc = data.toString().toLowerCase()

    if (lc === 'quit\n') {
      console.log('Time Elapsed in Seconds:')
      console.timeEnd()
      process.exit()
    }

    callback(null, `Message in Base64: ${base64}\n\n`)
  },
})

process.stdin.pipe(transform).pipe(process.stdout)
