import { render } from "@testing-library/react";
import fse from 'fs-extra';
import App from './App';

test('html snapshot test', async () => {
    const addStyle = function (dirname: string, urls: string[]) {
        return urls.map(url => {
            const style = document.createElement("style")
            style.lang = "css"
            style.innerHTML = fse.readFileSync(dirname + (url.startsWith("/") ? url : ("/" + url))).toString()
            return document.head.appendChild(style)
        })
    }
    addStyle(__dirname, [
        "/index.css",
        "/App.css"
    ])
    const container = document.createElement("div")
    document.body.appendChild(container)
    render(<App />, { container })
    return fse.writeFile(__filename + ".snap.html", new XMLSerializer().serializeToString(document))
});
