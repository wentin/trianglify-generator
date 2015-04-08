let React = require('react/addons');
let Trianglify = require('trianglify');
let ColorList = require('./ColorList.jsx');

module.exports = class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let handleOptionChange = this.props.handleOptionChange;

    return (
      <div className="controls">
        <div className="options">
          <h3>Width</h3>
          <input type="text" className="option-input" value={this.props.opts.width} 
            onChange={(e) => handleOptionChange({width: parseInt(e.target.value) || 0})}/>
          <h3>Height</h3>
          <input type="text" className="option-input" value={this.props.opts.height} 
            onChange={(e) => handleOptionChange({height: parseInt(e.target.value)})}/>
          <h3>Variance <span className="option-value">{this.props.opts.variance}</span>
          </h3>
          <input type="range" min="0" max="1" step="0.01"
                 value={this.props.opts.variance}
                 onChange={(e) => handleOptionChange({variance: e.target.value})}/>
          <h3>Cell Size <span className="option-value">{this.props.opts.cell_size}</span>
          </h3>
          <input type="range" min="50" max="400" step="10"
                 value={this.props.opts.cell_size}
                 onChange={(e) => handleOptionChange({cell_size: parseInt(e.target.value)})}/>
          <h3>Color</h3>
        </div>
        <ColorList colors={Trianglify.colorbrewer} 
        onSelect={(c) => handleOptionChange({x_colors: c})} />
      </div>
    );
  }
};