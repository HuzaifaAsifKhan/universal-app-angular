import * as express from 'express';
import { join } from 'path';

export const app = express();
const distFolder = join(
    process.cwd(),
    'dist/my-universal-app'
);


app.get(
    '*.*',
    express.static(distFolder, {
        maxAge: '1y',
    })
);


app.use('/', express.static(distFolder));
app.use('/**', express.static(distFolder));


const port = 80;

app.listen(port, () => {
  console.log(
    `Backend is runing on: http://localhost:${port}`
  );
});