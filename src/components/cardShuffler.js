
import React from 'react';
import MemoryCard from './memoryCard';
// import ScoreTally from "./scoreTally";

const x = [4, 7, 2, 8, 3, 1, 9, 5, 6];

// const style = {
//     first: {
//         // backgroundImage: "url('https://picsum.photos/200/300/?random')"
//     }
// }


class CardShuffler extends React.Component {
    state = {
        randomOrder: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        score: 0,
        lastBtn: .03,
        pickedArray: [0, 0]
    };

    increaseScore = () => {
        if (this.state.score < 9) {
            // this.setState({
            //     score: this.state.score + 1
            // })
            this.setState((state, props) => ({
                score: state.score + 1
              }));
        } else if (this.state.score >= 9) {
            alert("You've won, try again!");
            // this.setState(
            //     {
            //         score: 0,
            //         pickedArray: [0]
            //     }
            // )
            this.setState((state, props) => ({
                score: 0,
                pickedArray: [0, 0]
              }));
        }
    }

    componentDidMount() {
        this.shuffle(x);
    }

    componentDidUpdate() {
        this.shuffle(x);
    }

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        // console.log("Shuffled");
        // console.log(x);
    };

    andPush = () => {
        // this.setState({
        //     randomOrder: x
        // })
        this.setState((state, props) => ({
            randomOrder: x
          }));
    };

    setLastBtn = (event) => {
        const { target: { id } } = event;

        // this.setState({
        //     lastBtn: id
        // })
        this.setState((state, props) => ({
            lastBtn: id
        }));
        console.log(this.state.lastBtn);
        this.state.pickedArray.push(parseInt(this.state.lastBtn));
        console.log("Picked so far: ", this.state.pickedArray);
    };

    checkStatus = () => {
        console.log("PICKED ALREADY ARRAY: --> ",this.state.pickedArray);
        console.log("LAST BUTTON: ",this.state.lastBtn);
        if (this.state.pickedArray.join('').includes(this.state.lastBtn)===true) {
            console.log("=========ALREADY PICKED============");
            this.setState({
                score: 0,
                lastBtn: +"",
                pickedArray: [0, 0]
            });
            alert("You've lost. Try again...and remember what you picked!");
        } else if (this.state.pickedArray.join('').includes(this.state.lastBtn)===false) {
            console.log("............not picked yet..........!");
            this.increaseScore();
        }
    }

    render() {
        return (
            <div>
                <span
                    className="score"
                    id="scoreCount">
                    Score counter: {this.state.score}{<br></br>}
                    {/* Last button clicked: {this.state.lastBtn} */}
                </span>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[0]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[1]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[2]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[3]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[4]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[5]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[6]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[7]}
                                />
                            </div>
                        </div>
                </div>
                <div onClick={this.andPush}>
                        <div onClick={this.setLastBtn}>
                            <div onClick={this.checkStatus}>
                                <MemoryCard
                                    id={this.state.randomOrder[8]}
                                />
                            </div>
                        </div>
                </div>
            </div >
        )
    };

};

export default CardShuffler;