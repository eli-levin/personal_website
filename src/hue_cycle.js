'use strict';

class HueCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { degree: props.base };
  }

  tick() {
    this.setState(state => ({
      degree: (state.degree<180) ? state.degree+1 : 0
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 2400);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getHSLA() {
    const val = 1/0.2*(this.state.degree) * 210;
    return 'hsla('+val+', 90%, 60%, 1)';
  }

  render() {
    return (
      <div class="hue-cycle" style={{backgroundColor: this.getHSLA()}}>
        <a class="link" href={this.props.link}>{this.props.text}</a>
      </div>
    );
  }
}

const links = [
  {link: "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html", text: "👨🏻‍💻 AWS"},
  {link: "https://chessvision.app", text: "📱 Chess Vision"},
  {link: "https://www.linkedin.com/in/eli-levin-bb3804b5/", text: "🍔 Blog"},
];

const gbase = Math.floor(Math.random() * 180);
let lst = [];
for (let i=0; i<links.length; i++) {
  lst = [...lst, <HueCycle base={ gbase+(i+1)*2 }
                           link={ links[i].link }
                           text={ links[i].text } />]
}

ReactDOM.render(
  <div>{lst}</div>,
  document.getElementById('root')
);