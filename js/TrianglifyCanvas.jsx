let React = require('react');
let Trianglify = require('trianglify');

module.exports = class GlyphiconGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  getDefaultProps() {
    return Trianglify.defaults;
  }

  componentDidMount() {
    this.renderCanvas();
  }

  shouldComponentUpdate(nextProps, nextState) {
    for(var key in nextProps) {
      if (this.props[key] !== nextProps[key]) {
        return true;
      }
    }
    return false;
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  renderCanvas() {
    let canvas = React.findDOMNode(this);
    Trianglify(this.props).canvas(canvas);
  }

  render() {
    return <canvas />;
  }
}