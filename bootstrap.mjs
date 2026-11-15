import fs from 'node:fs/promises';import {gunzipSync} from 'node:zlib';
const seed=JSON.parse(gunzipSync(Buffer.from(await fs.readFile(new URL('seed.json.gz.base64',import.meta.url),'utf8'),'base64')));
for(const [file,value] of [['sources.json',seed.sources],['data.json',seed.data]]){try{await fs.access(new URL(file,import.meta.url));}catch{await fs.writeFile(new URL(file,import.meta.url),JSON.stringify(value,null,2));}}
