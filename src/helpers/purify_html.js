import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";
import marked from "marked";

const dompurify = createDomPurify(new JSDOM().window);

export default async function purifyHTML(html) {
  console.log("sanitizing html");
  let sanitizedHTML = () => {
    return (sanitizedHTML = dompurify.sanitize(marked(html)));
  };

  return sanitizedHTML();
}
