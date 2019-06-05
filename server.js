const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/cat', (req, res) => {
    const queryParams = { id: req.params.id }
    app.render(req, res, `/cat?id=${queryParams}`, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(5000, err => {
    if(err) throw err
    console.log(`> ready on http://localhost:5000`)
  })
})
.catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})

/* 
  이것으로 앱이 서버이드로 동작한다.

  새로고침시 페이지를 못찾는 경우 해당 api 경로로 요청하게하여 렌더링한다.
*/