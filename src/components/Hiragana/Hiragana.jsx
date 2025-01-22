import React, { useState } from 'react';
import styles from './Hiragana.module.css';
import kanasoundA from '../../assets/kanasound-a.mp3';
import kanasoundI from '../../assets/kanasound-i.mp3';
import kanasoundU from '../../assets/kanasound-u.mp3';
import kanasoundE from '../../assets/kanasound-e.mp3';
import kanasoundO from '../../assets/kanasound-o.mp3';
import kanasoundKa from '../../assets/kanasound-ka.mp3';
import kanasoundKi from '../../assets/kanasound-ki.mp3';
import kanasoundKu from '../../assets/kanasound-ku.mp3';
import kanasoundKe from '../../assets/kanasound-ke.mp3';
import kanasoundKo from '../../assets/kanasound-ko.mp3';
import kanasoundSa from '../../assets/kanasound-sa.mp3';
import kanasoundShi from '../../assets/kanasound-shi.mp3';
import kanasoundSu from '../../assets/kanasound-su.mp3';
import kanasoundSe from '../../assets/kanasound-se.mp3';
import kanasoundSo from '../../assets/kanasound-so.mp3';
import kanasoundTa from '../../assets/kanasound-ta.mp3';
import kanasoundChi from '../../assets/kanasound-chi.mp3';
import kanasoundTsu from '../../assets/kanasound-tsu.mp3';
import kanasoundTe from '../../assets/kanasound-te.mp3';
import kanasoundTo from '../../assets/kanasound-to.mp3';
import kanasoundNa from '../../assets/kanasound-na.mp3';
import kanasoundNi from '../../assets/kanasound-ni.mp3';
import kanasoundNu from '../../assets/kanasound-nu.mp3';
import kanasoundNe from '../../assets/kanasound-ne.mp3';
import kanasoundNo from '../../assets/kanasound-no.mp3';
import kanasoundHa from '../../assets/kanasound-ha.mp3';
import kanasoundHi from '../../assets/kanasound-hi.mp3';
import kanasoundFu from '../../assets/kanasound-fu.mp3';
import kanasoundHe from '../../assets/kanasound-he.mp3';
import kanasoundHo from '../../assets/kanasound-ho.mp3';
import kanasoundMa from '../../assets/kanasound-ma.mp3';
import kanasoundMi from '../../assets/kanasound-mi.mp3';
import kanasoundMu from '../../assets/kanasound-mu.mp3';
import kanasoundMe from '../../assets/kanasound-me.mp3';
import kanasoundMo from '../../assets/kanasound-mo.mp3';
import kanasoundYa from '../../assets/kanasound-ya.mp3';
import kanasoundYu from '../../assets/kanasound-yu.mp3';
import kanasoundYo from '../../assets/kanasound-yo.mp3';
import kanasoundRa from '../../assets/kanasound-ra.mp3';
import kanasoundRi from '../../assets/kanasound-ri.mp3';
import kanasoundRu from '../../assets/kanasound-ru.mp3';
import kanasoundRe from '../../assets/kanasound-re.mp3';
import kanasoundRo from '../../assets/kanasound-ro.mp3';
import kanasoundWa from '../../assets/kanasound-wa.mp3';
import kanasoundWo from '../../assets/kanasound-wo.mp3';
import kanasoundN from '../../assets/kanasound-n.mp3';

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

const sounds = {
    'あ': kanasoundA,
    'い': kanasoundI,
    'う': kanasoundU,
    'え': kanasoundE,
    'お': kanasoundO,
    'か': kanasoundKa,
    'き': kanasoundKi,
    'く': kanasoundKu,
    'け': kanasoundKe,
    'こ': kanasoundKo,
    'さ': kanasoundSa,
    'し': kanasoundShi,
    'す': kanasoundSu,
    'せ': kanasoundSe,
    'そ': kanasoundSo,
    'た': kanasoundTa,
    'ち': kanasoundChi,
    'つ': kanasoundTsu,
    'て': kanasoundTe,
    'と': kanasoundTo,
    'な': kanasoundNa,
    'に': kanasoundNi,
    'ぬ': kanasoundNu,
    'ね': kanasoundNe,
    'の': kanasoundNo,
    'は': kanasoundHa,
    'ひ': kanasoundHi,
    'ふ': kanasoundFu,
    'へ': kanasoundHe,
    'ほ': kanasoundHo,
    'ま': kanasoundMa,
    'み': kanasoundMi,
    'む': kanasoundMu,
    'め': kanasoundMe,
    'も': kanasoundMo,
    'や': kanasoundYa,
    'ゆ': kanasoundYu,
    'よ': kanasoundYo,
    'ら': kanasoundRa,
    'り': kanasoundRi,
    'る': kanasoundRu,
    'れ': kanasoundRe,
    'ろ': kanasoundRo,
    'わ': kanasoundWa,
    'を': kanasoundWo,
    'ん': kanasoundN
};

const englishNames = {
    'あ': 'a',
    'い': 'i',
    'う': 'u',
    'え': 'e',
    'お': 'o',
    'か': 'ka',
    'き': 'ki',
    'く': 'ku',
    'け': 'ke',
    'こ': 'ko',
    'さ': 'sa',
    'し': 'shi',
    'す': 'su',
    'せ': 'se',
    'そ': 'so',
    'た': 'ta',
    'ち': 'chi',
    'つ': 'tsu',
    'て': 'te',
    'と': 'to',
    'な': 'na',
    'に': 'ni',
    'ぬ': 'nu',
    'ね': 'ne',
    'の': 'no',
    'は': 'ha',
    'ひ': 'hi',
    'ふ': 'fu',
    'へ': 'he',
    'ほ': 'ho',
    'ま': 'ma',
    'み': 'mi',
    'む': 'mu',
    'め': 'me',
    'も': 'mo',
    'や': 'ya',
    'ゆ': 'yu',
    'よ': 'yo',
    'ら': 'ra',
    'り': 'ri',
    'る': 'ru',
    'れ': 're',
    'ろ': 'ro',
    'わ': 'wa',
    'を': 'wo',
    'ん': 'n'
};

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Hiragana = () => {
    const [selectedLines, setSelectedLines] = useState(['a']);
    const [currentLine, setCurrentLine] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isPracticing, setIsPracticing] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [randomize, setRandomize] = useState(false);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLines((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((line) => line !== value)
        );
        setIsPracticing(false);
        setShowResult(false);
        setIsFlipped(false);
    };

    const startPractice = () => {
        if (selectedLines.length === 0) {
            alert("Please select at least one line to practice.");
            return;
        }

        let mergedLines = [];
        for (const line of selectedLines) {
            if (hiraganaLines[line]) {
                mergedLines = mergedLines.concat(hiraganaLines[line]);
            }
        }

        if (mergedLines.length === 0) {
            alert("No valid lines selected. Please try again.");
            return;
        }

        if (randomize) {
            mergedLines = shuffleArray(mergedLines);
        }

        setCurrentLine(mergedLines);
        setCurrentIndex(0);
        setIsPracticing(true);
        setShowResult(false);
        setIsFlipped(false);
    };

    const repeatPractice = () => {
        let shuffledLines = [...currentLine];

        if (randomize) {
            shuffledLines = shuffleArray(currentLine);
        }

        setCurrentLine(shuffledLines);
        setCurrentIndex(0);
        setIsPracticing(true);
        setShowResult(false);
        setIsFlipped(false);
    };

    const showNext = () => {
        if (currentIndex < currentLine.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        } else {
            setShowResult(true);
            setIsPracticing(false);
        }
    };

    const restart = () => {
        setIsPracticing(false);
        setShowResult(false);
        setIsFlipped(false);
    };

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const playSound = () => {
        const sound = new Audio(sounds[currentLine[currentIndex]]);
        sound.play();
    };

    return (
        <div className={styles.container}>
            <h1>Hiragana Flash Cards</h1>
            {!isPracticing && !showResult && (
                <div className={styles.card}>
                    <h2>Choose lines to practice:</h2>
                    <div className={styles.checkboxList}>
                        {Object.keys(hiraganaLines).map((line) => (
                            <div key={line} className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id={line}
                                    value={line}
                                    checked={selectedLines.includes(line)}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor={line}>
                                    {line === 'all'
                                        ? 'All Hiragana'
                                        : hiraganaLines[line]
                                              .map((char) => englishNames[char])
                                              .join(' ')}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="randomize"
                            checked={randomize}
                            onChange={() => setRandomize(!randomize)}
                        />
                        <label htmlFor="randomize">Randomize</label>
                    </div>
                    <button onClick={startPractice} disabled={selectedLines.length === 0}>
                        Let's Practice
                    </button>
                </div>
            )}
            {isPracticing && !showResult && (
                <div className={styles.card}>
                    <div
                        id="flashcard"
                        className={`${styles.hiragana} ${isFlipped ? styles.flipped : ''}`}
                        onClick={toggleFlip}
                    >
                        <div className={styles.front}>
                            {currentLine[currentIndex]} {/* Show Japanese */}
                        </div>
                        <div className={styles.back}>
                            {englishNames[currentLine[currentIndex]]} {/* Show English */}
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <button onClick={showNext}>Next</button>
                        <button onClick={playSound} className={styles.speakerIcon}>🔊</button>
                    </div>
                </div>
            )}
            {showResult && (
                <div className={styles.card}>
                    <h2>Complete!</h2>
                    <div className={styles.resultButtons}>
                        <button onClick={restart}>Homepage</button>
                        <button onClick={repeatPractice}>Once More! もう一度</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hiragana;