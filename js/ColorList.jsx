let React = require('react/addons');

module.exports = class ColorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let colorItem = function(name, colors) {
      return (
        <div key={name} 
          className='color-item' 
          alt={name}
          onClick={this.props.onSelect.bind(this, colors)}>
          {colors.map((c) => <div style={{background: c}}/>)}
        </div>
      );
    }.bind(this);
    
    console.log('colors');

    return (
      <div className="color-list">
        {Object.keys(this.props.colors).map((k)=> colorItem(k, this.props.colors[k]))}
      </div>
    );
  }
};