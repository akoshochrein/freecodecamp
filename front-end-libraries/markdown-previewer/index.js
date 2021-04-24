marked.setOptions({
    gfm: true,
    breaks: true,
});

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputArea: {
        width: '50%',
        height: 300,
        fontFamily: 'monospace',
        marginBottom: 12,
    },
    outputArea: {
        width: '75%',
        border: '1px solid black',
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
    }
}

const startMarkdown = `# This is my markdown preview application

## Enjoy trying it out

[Here](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) is where the task is coming from.

Here is an **example bold text** that will precede the code block:

\`\`\`
const letsDoSomeJS = 'text';
console.log(letsDoSomeJS);
\`\`\`

Inline code looks like \`this\`.

Here are my favourite puddings (order doesn't matter):

- Vanilla
- Chocolate
- Caramel

Let's see a random quote from the previous challenge:

> Let us more and more insist on raising funds of love, of kindness, of understanding, of peace. Money will come if we seek first the Kingdom of God - the rest will be given. - Mother Theresa

![much needed cat](https://i.imgur.com/VqGO4FK.jpg "Logo Title Text 1")

`;

const App = () => {
    const [markdown, setMarkdown] = React.useState(startMarkdown);

    return (
        <div id="app-wrapper" style={styles.wrapper}>
            <textarea id="editor" style={styles.inputArea} value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <div id="preview" style={styles.outputArea} dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(marked(markdown)),
            }} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));