import React, { Component } from 'react';
import { Button } from 'antd';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            odds: 0
        }
    }

    getCountOfAvailableMinions() {
        let total = 0;

        for (let card of this.props.buyableCards) {
            total += this.props.tierCardCounts[card.Tier];
        }

        for (let value of Object.values(this.props.takenCards)) {
            total -= value;
        }

        return total;
    }

    // Returns a map where the key is the card name and the value is another object with fields that indicate needed and available amounts of that card
    getCardMap() {
        let cardMap = {};
        const { minionsMap, tierCardCounts, takenCards, selectedCards } = this.props;

        for (let key of Object.keys(selectedCards)) {
            let cardTier = parseInt(minionsMap[key].Tier);
            let availableAmount = tierCardCounts[cardTier] - takenCards[key];

            cardMap[key] = {
                'needed': selectedCards[key],
                'available': availableAmount
            }
        }

        return cardMap;
    }

    getXUniqueRandoms(min, max, x) {
        let arr = [];

        while(arr.length < x) {
            let randomInt = this.getRandomInRange(min, max);
            if (arr.indexOf(randomInt) === -1) {
                arr.push(randomInt);
            }
        }

        return arr;
    }

    getRandomInRange(min, max) {
        let delta = max-min;

        return Math.floor(Math.random() * delta) + min;
    }

    // Returns an object where the key is the cardName and the value is a 2 element array with a min and max value that represents the range of a successful draw
    getCardSuccessRanges(cardMap) {
        let count = 0;
        let ranges = {};

        for (let cardName of Object.keys(cardMap)) {
            let availableCards = cardMap[cardName]['available'];
            ranges[cardName] = [count, count + availableCards - 1];
            count += availableCards;
        }

        return ranges;
    }

    runXSimulationsWithAnd(x) {
        let successes = 0;

        for (let i = 0; i < x; i++) {
            successes += this.runOneSimulationWithAnd();
        }

        this.setState({
            odds: successes/x
        });
    }

    // Returns 1 if conditions were met, 0 if not
    runOneSimulationWithAnd() {
        let totalCards = this.getCountOfAvailableMinions();
        let cardsDrawnPerRound = this.getCountOfMinionsInTavern();
        let cardMap = this.getCardMap();
        let rollCount = this.props.rollCount;

        while (rollCount > 0 && Object.keys(cardMap).length > 0) {
            let rolls = this.getXUniqueRandoms(0, totalCards, cardsDrawnPerRound);
            let ranges = this.getCardSuccessRanges(cardMap);
            // For every roll, if there is a roll that matches one of the needed cards, make appropriate adjustments to totalCards and cardMap
            // Remove a key from object if the value for needed is 0

            for (const roll of rolls) {
                for (const key of Object.keys(ranges)) {
                    const [min, max] = ranges[key];
                    if (cardMap[key] && roll <= max && roll >= min) {
                        totalCards -= 1;
                        cardMap[key]['available'] -= 1;
                        cardMap[key]['needed'] -= 1;

                        if (cardMap[key]['needed'] <= 0) {
                            delete cardMap[key];
                        }
                    }
                }
            }
            rollCount--;
        }

        if (Object.keys(cardMap).length > 0) {
            return 0;
        } else {
            return 1;
        }
    }

    getCountOfMinionsInTavern() {
        return this.props.tavernCardCounts[this.props.currentTier];
    }

    calculateOrOdds() {
        
    }

    // Calcuate odds of finding >= numDesired cards with 
                                // totalCards cards in the available pool and 
                                // cardsDrawn cards drawn and
                                // successCount of desiredCards
    // This is the odds of hitting at least numDesired cards in one tavern roll when there are successCount of desired cards
    calculateOddsToHit(numDesired) {

        // this.props.

    }

    calculateOdds(numDesiredCopies, numRolls) {
        if (numDesiredCopies === 0) {
            return 1
        }
        if (numRolls === 0) {
            return 0
        }

        let retVal = 0;

        for (let i = 0; i < this.getCountOfMinionsInTavern(); i++) {
            retVal += this.calculateOdds(numDesiredCopies - i, numRolls - 1);
        }

        return retVal
    }

    render() {
        if (Object.keys(this.props.selectedCards).length > 0) {
            return (
                <div>
                    <Button type="primary" onClick={() => this.runXSimulationsWithAnd(100000)}>Calculate Odds</Button>
                    <div>Odds are: {this.state.odds}</div>
                </div>
            );
        }
        return null;
    }
}

export default Results;