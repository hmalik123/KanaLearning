import React, { useState } from 'react';
import styles from './Katakana.module.css';
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

const sounds = {
    'ア': kanasoundA,
    'イ': kanasoundI,
    'ウ': kanasoundU,
    'エ': kanasoundE,
    'オ': kanasoundO,
    'カ': kanasoundKa,
    'キ': kanasoundKi,
    'ク': kanasoundKu,
    'ケ': kanasoundKe,
    'コ': kanasoundKo,
    'サ': kanasoundSa,
    'シ': kanasoundShi,
    'ス': kanasoundSu,
    'セ': kanasoundSe,
    'ソ': kanasoundSo,
    'タ': kanasoundTa,
    'チ': kanasoundChi,
    'ツ': kanasoundTsu,
    'テ': kanasoundTe,
    'ト': kanasoundTo,
    'ナ': kanasoundNa,
    'ニ': kanasoundNi,
    'ヌ': kanasoundNu,
    'ネ': kanasoundNe,
    'ノ': kanasoundNo,
    'ハ': kanasoundHa,
    'ヒ': kanasoundHi,
    'フ': kanasoundFu,
    'ヘ': kanasoundHe,
    'ホ': kanasoundHo,
    'マ': kanasoundMa,
    'ミ': kanasoundMi,
    'ム': kanasoundMu,
    'メ': kanasoundMe,
    'モ': kanasoundMo,
    'ヤ': kanasoundYa,
    'ユ': kanasoundYu,
    'ヨ': kanasoundYo,
    'ラ': kanasoundRa,
    'リ': kanasoundRi,
    'ル': kanasoundRu,
    'レ': kanasoundRe,
    'ロ': kanasoundRo,
    'ワ': kanasoundWa,
    'ヲ': kanasoundWo,
    'ン': kanasoundN
};

const englishNames = {
    'ア': 'a',
    'イ': 'i',
    'ウ': 'u',
    'エ': 'e',
    'オ': 'o',
    'カ': 'ka',
    'キ': 'ki',
    'ク': 'ku',
    'ケ': 'ke',
    'コ': 'ko',
    'サ': 'sa',
    'シ': 'shi',
    'ス': 'su',
    'セ': 'se',
    'ソ': 'so',
    'タ': 'ta',
    'チ': 'chi',
    'ツ': 'tsu',
    'テ': 'te',
    'ト': 'to',
    'ナ': 'na',
    'ニ': 'ni',
    'ヌ': 'nu',
    'ネ': 'ne',
    'ノ': 'no',
    'ハ': 'ha',
    'ヒ': 'hi',
    'フ': 'fu',
    'ヘ': 'he',
    'ホ': 'ho',
    'マ': 'ma',
    'ミ': 'mi',
    'ム': 'mu',
    'メ': 'me',
    'モ': 'mo',
    'ヤ': 'ya',
    'ユ': 'yu',
    'ヨ': 'yo',
    'ラ': 'ra',
    'リ': 'ri',
    'ル': 'ru',
    'レ': 're',
    'ロ': 'ro',
    'ワ': 'wa',
    'ヲ': 'wo',
    'ン': 'n'
};

// Helper function to shuffle an array
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Katakana = () => {
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

        // Reset practice states
        setIsPracticing(false);
        setShowResult(false);
        setIsFlipped(false);
    };

    const startPractice = () => {
        let mergedLines = selectedLines.flatMap((line) => katakanaLines[line]);
    
        if (randomize) {
            mergedLines = shuffleArray(mergedLines); // Shuffle the selection
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
            shuffledLines = shuffleArray(currentLine); // Re-shuffle the same selection
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

    const playSound = () => {
        const sound = sounds[currentLine[currentIndex]];
        if (sound) {
            const audio = new Audio(sound);
            audio.play();
        }
    };

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles.container}>
            <h1>Katakana Flash Cards</h1>
            {!isPracticing && !showResult && (
                <div className={styles.card}>
                    <h2>Choose lines to practice:</h2>
                    <div className={styles.checkboxList}>
                        {Object.keys(katakanaLines).map((line) => (
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
                                        ? 'All Katakana'
                                        : katakanaLines[line]
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
                        <label htmlFor="randomize">Randomise</label>
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
                            {currentLine[currentIndex]} {/* Show Japanese katakana on the front */}
                        </div>
                        <div className={styles.back}>
                            {englishNames[currentLine[currentIndex]]} {/* Show English on the back */}
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <button onClick={showNext}>Next</button>
                        <button onClick={playSound} className={styles.speakerIcon}>
                            🔊
                        </button>
                    </div>
                </div>
            )}
            {showResult && (
                <div className={styles.card}>
                    <h2>Congratulations! You've completed the lines.</h2>
                    <div className={styles.resultButtons}>
                        <button onClick={restart}>Back to Homepage</button>
                        <button onClick={repeatPractice}>Repeat</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Katakana;


