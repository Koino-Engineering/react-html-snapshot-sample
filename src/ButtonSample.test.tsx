import { render } from "@testing-library/react";
import fse from 'fs-extra';
import { ButtonSample } from './ButtonSample';

test('html snapshot test', async () => {
    const container = document.createElement("div")
    document.body.appendChild(container)
    render(<ButtonSample />, { container })
    return fse.writeFile(__filename + ".snap.html", document.documentElement.outerHTML)
});
