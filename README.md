Running  `npm i && npm t` runs successfully with the following output

```
% npm t

> test-pretty@1.0.0 test
> npm run build && node index.js


> test-pretty@1.0.0 build
> tsc

(node:78798) ExperimentalWarning: CommonJS module /Users/jesght/Documents/GitHub/jeswr/test-pretty/index.js is loading ES Module /Users/jesght/Documents/GitHub/jeswr/test-pretty/node_modules/@rdfjs/data-model/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

[] <http://schema.org/name> "RDF/JS Data model" .
```
