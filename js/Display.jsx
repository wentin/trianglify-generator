let React = require('react/addons');
let TrianglifyCanvas = require('./TrianglifyCanvas.jsx');

module.exports = class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="display">
        <TrianglifyCanvas {...this.props.opts}/>
        <div className="downloads">
          <h3>Download:</h3>
          <a href="#">SVG</a> <a href="#">PNG</a>
        </div>
      </div>
    );
  }
};