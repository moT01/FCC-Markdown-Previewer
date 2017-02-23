const Header = () => {
    return (
        <div>
            <h1>Markdown Previewer</h1>
            <h4>Created for freecodecamp.com</h4>
        </div>
    );
}

class Markup extends React.Component {
    constructor(props) {
        super(props);
        var unmarked = 'Type in the input to see the previewer in action, ...the html created is on the left and the actual output is on the right. Have FUN!\n\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\n```\ncode snippet\n```\n\n**bold**\n__bold__\n\n*italic*\n_italic_\n\n- unordered list\n- item\n- item\n\n\n1. ordered list\n2. item\n3. item\n\nCheck out the documentation for the [Marked.js](https://github.com/chjj/marked) library.';
        this.state = {
            input: unmarked,
            html: marked(unmarked)
        }
    }
    
    update = (e) => {
        this.setState ({
            input: e.target.value,
            html: marked(e.target.value)
        });
    };
    
    render() {
        return(
            <div>
                <Header />
                <div className="flex">
                    <div className="htmlcolumn">
                        <br/>:html:<br/>
                        <div className="board html">{this.state.html}</div>
                    </div>
                    <div className="column">
                        <br/>:input:<br/>
                        <textarea className="board input" id="textarea" onChange={this.update}>{this.state.input}</textarea>
                    </div>    
                    <div className="column">
                        <br/>:output:<br/>
                        <div className="board output" id="output" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
                </div>
            </div>
        </div>
        );
    }
}; //end Markup

ReactDOM.render(<Markup />,  document.getElementById('app'));