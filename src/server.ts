import * as http from 'http';
import handler from 'serve-handler';

const server = http.createServer((request: any, response: any) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});