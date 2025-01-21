import React, { useState } from 'react';
import styles from './Katakana.module.css';

const katakanaLines = {
    a: ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ka: ['カ', 'キ', 'ク', 'ケ', 'コ'],
    sa: ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ta: ['タ', 'チ', 'ツ', 'テ', 'ト'],
    na: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ha: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ma: ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ya: ['ヤ', 'ユ', 'ヨ'],
    ra: ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    wa: ['ワ', 'ヲ'],
    n: ['ン'],
    all: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン']
};

const Katakana = () => {
    const [selectedLine, setSelectedLine] = useState('a');
    const [currentLine, setCurrentLine] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isPracticing, setIsPracticing] = useState(false);

    const handleLineChange = (e) => {
        setSelectedLine(e.target.value);
        setIsPracticing(false);
        setShowResult(false);
    };

    const startPractice = () => {
        setCurrentLine(katakanaLines[selectedLine]);
        setCurrentIndex(0);
        setIsPracticing(true);
        setShowResult(false);
    };

    const showNext = () => {
        if (currentIndex < currentLine.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowResult(true);
            setIsPracticing(false);
        }
    };

    const restart = () => {
        setIsPracticing(false);
        setShowResult(false);
    };

    return (
        <div className={styles.container}>
            <h1>Katakana Flash Cards</h1>
            {!isPracticing && !showResult && (
                <div className={styles.card}>
                    <label htmlFor="line">Choose a line to practice:</label>
                    <select id="line" value={selectedLine} onChange={handleLineChange}>
                        <option value="a">a i u e o</option>
                        <option value="ka">ka ki ku ke ko</option>
                        <option value="sa">sa shi su se so</option>
                        <option value="ta">ta chi tsu te to</option>
                        <option value="na">na ni nu ne no</option>
                        <option value="ha">ha hi fu he ho</option>
                        <option value="ma">ma mi mu me mo</option>
                        <option value="ya">ya yu yo</option>
                        <option value="ra">ra ri ru re ro</option>
                        <option value="wa">wa wo</option>
                        <option value="n">n</option>
                        <option value="all">All Katakana</option>
                    </select>
                    <button onClick={startPractice}>Let's Practice</button>
                </div>
            )}
            {isPracticing && !showResult && (
                <div className={styles.card}>
                    <div id="flashcard" className={styles.hiragana}>
                        {currentLine[currentIndex]}
                    </div>
                    <div className={styles.controls}>
                        <button onClick={showNext}>Next</button>
                    </div>
                </div>
            )}
            {showResult && (
                <div className={styles.card}>
                    <h2>Congratulations! You've completed the line.</h2>
                    <button onClick={restart}>Practice Another Line</button>
                </div>
            )}
        </div>
    );
};

export default Katakana;
