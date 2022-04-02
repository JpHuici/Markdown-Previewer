const Form = function(props) {
    return (
        <textarea 
          className="textarea" 
          id="editor" 
          onChange={props.onChange}>{props.defaultText}
        </textarea>
    )
  }

const defaultText=
`# This is a markdown header
## This is a sub-header

[This is a link](freecodecamp.org)

\`This is in-line code: 1 + 1 = 2\`

\`\`\`
This is a code block
var a = 10
var b = 5
var c = a - b //c returns 5
\`\`\`

Here is a list:
- This
- Is
- A
- List

> This is a block quote

This is **bolded text**

coding Logo by Sudarshan Tiwari:

![Code Logo w/ Text](https://cdn.dribbble.com/users/5646686/screenshots/15479535/media/133786e5652968d3f6d6a7d41c0a19a7.png?compress=1&resize=1200x900&vertical=top )

`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: defaultText
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  
handleChange(event) {
    let inputText = event.target.value
    this.setState({
      markdown: inputText
    })
  }
  
render() {
    return (
     <div className="text-center px-4" id='app-wrapper'>
      <section id='input-container'>
        <h1 className="p-4" id='header'>My Editor</h1>
        <h4>(Input text here)</h4>
        <hr/>
        <Form onChange={this.handleChange} defaultText={this.state.markdown} />
      </section>
      <div id='markdown-container'>
        <h1 className="mt-3">Markdown Preview</h1>
        <hr/>
        <section 
        id='preview' 
        dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
        </section>
      </div>
     </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))