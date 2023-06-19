const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { JSDOM, DOMWindow } from 'jsdom';
import fs from 'fs';
import path from 'path';
const html = fs.readFileSync(
  path.resolve(__dirname, './htmlBox/youpassed.html'),
  'utf8'
);
describe('simple ui test', () => {
  let document: Document;
  let window: DOMWindow;
  beforeEach(() => {
    window = new JSDOM(html, { runScripts: 'dangerously' }).window;
    document = window.document;
  }); // 次のステップで、ここにテストケースを追加する
  it("doesn't show a message at the initial state", () => {
    const message = document.querySelector('#message > p');
    //message配下のpタグ要素を取得
    expect(message).toBe(null);
  });

  test('テスト名', () => {
    const button = document.querySelector('#showMessage'); // ボタンを取得
    const click = new window.MouseEvent('click'); // clickイベントを用意
    button?.dispatchEvent(click); // buttonをクリック

    const message = document.querySelector('#message > p');
    expect(message?.textContent).toBe('You Passed!!!');
  });

  test('テスト名', () => {
    const button = document.querySelector('#showMessage');
    const click = new window.MouseEvent('click');
    button?.dispatchEvent(click);
    button?.dispatchEvent(click); // 2回クリック

    const message = document.querySelectorAll('#message > p');
    expect(message.length).toBe(1);
    expect(message[0].textContent).toBe('You Passed!!!');
  });
});
