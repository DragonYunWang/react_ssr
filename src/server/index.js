import express from 'express'

const app = express()

app.get('*', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Cyan</title>
    </head>
    
    <body>
      <div id="root">React Server</div>
    </body>
    
    </html>`
  )
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
