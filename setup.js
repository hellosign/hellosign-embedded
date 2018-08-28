import jsdom from 'jsdom';

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    createContextualFragment: str => jsdom.JSDOM.fragment(str),
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
