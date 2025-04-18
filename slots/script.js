function calculateRTPOutcome() {
    const baseProbability = RTP / 100;
    const rand = Math.random();
    const outcome = rand * (1 + volatility * 2) + (1 - volatility);
    return Math.min(outcome, 1);
}
