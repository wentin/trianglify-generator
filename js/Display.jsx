let React = require('react/addons');
let TrianglifyCanvas = require('./TrianglifyCanvas.jsx');
let Trianglify = require('Trianglify');

module.exports = class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadSVG(e) {
    let svg = Trianglify(this.props.opts).svg();
    let s = new XMLSerializer();
    let svgString = s.serializeToString(svg);
    let base64 = btoa(svgString);
    let dataUri = 'data:image/svg+xml;base64,' + base64;
    e.target.href=dataUri;
  }

  downloadPNG(e) {
    let dataUri = Trianglify(this.props.opts).png();
    e.target.href=dataUri;
  }

  render() {
    return (
      <div className="display">
        <div className="canvas-container">
          <TrianglifyCanvas {...this.props.opts}/>
        </div>
        <div className="downloads">
          <h3>Download:</h3>
          <a download="pattern.svg" onClick={this.downloadSVG.bind(this)}>SVG</a> 
          {' '}
          <a download="pattern.png" onClick={this.downloadPNG.bind(this)} >PNG</a>
        </div>
      </div>
    );
  }
};