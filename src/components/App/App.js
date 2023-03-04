import React from 'react';
import Nav from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import './App.css';
import Footer from '../Footer/Footer';
import ChallengeSection from '../Challenge/Challenge';
import { SAMPLE_PARA } from '../../data/samplePara';

const TotalTime = 60;
const ServiceUrl = 'http://metaphorpsum.com/paragraphs/1/9';
const DefaultState = {
  selectedPara: '',
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParaFallback = () => {
    const data = SAMPLE_PARA[Math.floor(Math.random() * SAMPLE_PARA.length)];
    const selectedParaArray = data.split('');
    const testInfo = selectedParaArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: 'notAttempted',
      };
    });
    this.setState({ ...DefaultState, testInfo, selectedPara: data });
  };

  fetchNewPara = () => {
    fetch(ServiceUrl)
      .then((res) => res.text())
      .then((data) => {
        // console.log(data);
        // this.setState({ selectedPara: data });
        const selectedParaArray = data.split('');
        const testInfo = selectedParaArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: 'notAttempted',
          };
        });
        this.setState({ ...DefaultState, testInfo, selectedPara: data });
      });
  };

  componentDidMount() {
    this.fetchNewParaFallback();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = TotalTime - this.state.timeRemaining;

        const speed =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(speed),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => {
    this.fetchNewParaFallback();
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }

    const characters = inputValue.length;
    const words = inputValue.split(' ').length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: 'notAttempted',
          },
          ...this.state.testInfo.slice(1),
        ],
        characters: characters,
        words: words,
      });
      return;
    }

    if (index >= this.state.selectedPara.length) {
      this.setState({ characters, words });
      return;
    }

    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedPara.length - 1)) {
      testInfo[index + 1].status = 'notAttempted';
    }

    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

    this.setState({
      testInfo,
      words,
      characters,
    });
  };
  render() {
    return (
      <div className="app">
        {/* Navbar */}
        <Nav />
        {/* Landing Page */}
        <Landing />
        {/* Challenge section */}
        <ChallengeSection
          selectedPara={this.state.selectedPara}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
