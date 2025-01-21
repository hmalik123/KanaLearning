import React, { useState } from 'react';
import styles from './Hiragana.module.css';

const hiraganaLines = {
    a: ['あ', 'い', 'う', 'え', 'お'],
    ka: ['か', 'き', 'く', 'け', 'こ'],
    sa: ['さ', 'し', 'す', 'せ', 'そ'],
    ta: ['た', 'ち', 'つ', 'て', 'と'],
    na: ['な', 'に', 'ぬ', 'ね', 'の'],
    ha: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ma: ['ま', 'み', 'む', 'め', 'も'],
    ya: ['や', 'ゆ', 'よ'],
    ra: ['ら', 'り', 'る', 'れ', 'ろ'],
    wa: ['わ', 'を'],
    n: ['ん'],
    all: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']
};

const Hiragana = () => {
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
        setCurrentLine(hiraganaLines[selectedLine]);
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
            <h1>Hiragana Flash Cards</h1>
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
                        <option value="all">All Hiragana</option>
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

export default Hiragana;
