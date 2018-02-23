import React from 'react';
import pluginCall from 'sketch-module-web-view/client';

const actionStyle = {
  width: '100%',
}

const btn = {
  display: 'block',
  width: '100%',
  padding: '8px',
  marginBottom: '8px',
  fontFamily: 'Ubuntu',
  fontSize: '16px',
  lineHeight: '24px',
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pluginCall('webviewLoaded');
  }

  componentWillMount() {
    document.addEventListener("updateMainData", this.updateData.bind(this));
    // document.addEventListener('keydown', this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('updateMainData', this.updateData.bind(this));
    // document.removeEventListener('keydown', this.onKeyPressed.bind(this));
  }

  updateData(e) {
    console.log('updateMainData trigger');
    console.log(e.data);
  }

  onKeyPressed(e) {
    console.log(e.keyCode);
  }

  render() {
    const { msg = 'Hello world' } = this.props
    console.log(this.props);
    console.log(this.state);

    return (
      <div
        style= {{
          overflow: 'scroll',
          height: 640,
        }}>
        <div>
          <img src={ require('./logo.png') } style={{
            width: 100,
            height: 100,
            marginTop: 0,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: .1,
          }}/>
        </div>
        <div style= {{
          margin: 16,
        }}>

          <h2 style={{
            textAlign: 'center',
            fontWeight: 'normal',
            marginTop: -20
          }}>www.anotherplanet.io</h2>

          <div>
            <h3>{msg}</h3>
          </div>

          <div>
            <h3>Actions</h3>
          </div>
          <div style={actionStyle}>
            <button onClick={() => pluginCall('nativeLog', 'Called from the webview')}
              style={btn}
              >Commande One</button>
          </div>


        </div>
      </div>
    );
  }
}
