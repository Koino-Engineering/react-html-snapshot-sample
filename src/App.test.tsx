import fse from 'fs-extra';
import puppeteer from 'puppeteer';
import ReactDOM from "react-dom";
import App from './App';

test('renders learn react link', async () => {
    return puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    }).then(async browser => {
        return browser
            .newPage()
            .then(async (page) => {
                return page
                    .evaluate(() => document)
                    .then(async () => {
                        const container = document.createElement("div")
                        document.body.id = "body"
                        container.id = "root"
                        document.body.appendChild(container)
                        ReactDOM.render(<App />, container)
                        return new XMLSerializer().serializeToString(document)
                    })
            })
            .then(htmlString => {
                return fse.writeFile(__filename + ".snap.html", htmlString)
            })
            .then(() => {
                return browser.close()
            });
    })
});