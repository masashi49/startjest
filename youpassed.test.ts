import { JSDOM, DOMWindow } from 'jsdom';
import fs from "fs"
import path from "path"

const html = fs.readFileSync(path.resolve(__dirname, './htmlBox/youpassed.html'),"utf8")

describe('simple ui test', () => {
test('テスト名', () => {
  let document: Document
  let window:DOMWindow

  beforeEach(()=>{
    window = new JSDOM(html , {runScripts:"dangerously"}).window
    document = window.document
  })
 expect(1).toBe(1);
});
});
