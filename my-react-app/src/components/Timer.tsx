import { Component } from 'react';
import './Timer.css';

interface TimerState {
  seconds: number;
  isRunning: boolean;
}

class Timer extends Component<{}, TimerState> {
  private intervalId: number | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      seconds: 0,
      isRunning: false,
    };
  }

  componentDidMount() {
    console.log('Timer component mounted');
  }

  componentDidUpdate(_prevProps: {}, prevState: TimerState) {
    if (prevState.isRunning !== this.state.isRunning) {
      console.log(`Timer ${this.state.isRunning ? 'started' : 'stopped'}`);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    console.log('Timer component unmounted');
  }

  start = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.intervalId = window.setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
    }
  };

  stop = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.setState({ isRunning: false });
  };

  reset = () => {
    this.stop();
    this.setState({ seconds: 0 });
  };

  formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    const { seconds, isRunning } = this.state;

    return (
      <div className="timer">
        <h2>Class Component: Timer</h2>
        <div className="timer-display">
          <p className="time-value">{this.formatTime(seconds)}</p>
          <p className="timer-status">
            Status: {isRunning ? 'Running' : 'Stopped'}
          </p>
        </div>
        <div className="timer-controls">
          <button
            onClick={this.start}
            disabled={isRunning}
            className="btn btn-start"
          >
            Start
          </button>
          <button
            onClick={this.stop}
            disabled={!isRunning}
            className="btn btn-stop"
          >
            Stop
          </button>
          <button onClick={this.reset} className="btn btn-reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;