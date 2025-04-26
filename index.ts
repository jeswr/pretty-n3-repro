import { write } from '@jeswr/pretty-turtle';
import dataFactory from '@rdfjs/data-model'

const quad = dataFactory.quad(
  dataFactory.blankNode(),
  dataFactory.namedNode('http://schema.org/name'),
  dataFactory.literal('RDF/JS Data model')
)

write([quad]).then(console.log)
