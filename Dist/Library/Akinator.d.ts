declare class Akinator {
    region: string;
    childMode: any;
    currentStep: number;
    uri: string | undefined;
    urlApiWs: any;
    uriObj: null | {
        uid: string;
        frontaddr: string;
    };
    noUri: string;
    noSession: string;
    progress: number;
    question: string;
    answers: any[];
    uid: string;
    frontaddr: string;
    session: string;
    signature: string;
    challenge_auth: string;
    guessCount: number | undefined;
    constructor(region: string, childMode: boolean);
    /**
    * Starts the akinator session and game.
    */
    start(): Promise<void>;
    /**
     * Gets the next question for the akinator session.
     * @param {BigInteger} answerId the answer to the question
     */
    step(answerId: any): Promise<void>;
    /**
     * Reverts the game back a previous step.
     */
    back(): Promise<void>;
    /**
     * The akinator attempts to make a guess and win the game.
     */
    win(): Promise<void>;
}
export default Akinator;
//# sourceMappingURL=Akinator.d.ts.map