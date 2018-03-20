import App from './app';

const port = process.env.PORT || 3001;

App.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`\nserver is listening on ${port}`)
})
