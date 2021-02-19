class HueCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { degree: props.base }; //181 bc Math.random returns <1 and this will truncate
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
      </div>
    );
  }
}

// ReactDOM.render(
//   <HueCycle />,
//   document.getElementById('root')
// );

const numbers = [1, 2, 3, 4];
const gbase = Math.floor(Math.random() * 181);
const listItems = numbers.map((n) =>
  <HueCycle base={Math.min(gbase+n*2, 180)} />
);

ReactDOM.render(
  <div>{listItems}</div>,
  document.getElementById('root')
);