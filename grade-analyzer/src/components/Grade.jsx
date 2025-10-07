import React, { useState } from 'react';
import './grade.css';

const Grade = () => {
    const [grades, setGrades] = useState([]);
    const [newGrade, setNewGrade] = useState("");
    const [average, setAverage] = useState(0);
    const [sortedGrades, setSortedGrades] = useState([]);
    const [highest, setHighest] = useState(null);
    const [lowest, setLowest] = useState(null);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("false");
    const total = grades.length;

    // Helper for badge color
    function getBadgeClass(grade) {
    if (grade >= 0 && grade <= 39)   return 'badge badge-red';
    if (grade >= 40 && grade <= 59)  return 'badge badge-orange';
    if (grade >= 60 && grade <= 79)  return 'badge badge-blue';
    if (grade >= 80 && grade <= 100) return 'badge badge-green';
    return 'badge';
}


    // Add grade
    const addGrade = () => {
        if (newGrade < 0 || newGrade > 100 || newGrade === "") {
            alert("Please enter a valid grade between 0 and 100");
            return;
        }
        setGrades([...grades, Number(newGrade)]);
        setNewGrade("");
    };

    // Reset
    const handleReset = () => {
        setGrades([]);
        setAverage(0);
        setHighest(null);
        setLowest(null);
        setCount(0);
        setSortedGrades([]);
        setValue("false");
    };

    // Analyze
    const handleAnalyze = () => {
        if (grades.length === 0) {
            alert("No grades to analyze");
            return;
        }
        const heighest = grades.reduce((a, b) => (a > b ? a : b));
        const lowest = grades.reduce((a, b) => (a < b ? a : b));
        const avg = grades.reduce((a, b) => Number(a) + Number(b), 0) / grades.length;
        setHighest(heighest);
        setLowest(lowest);
        setAverage(avg.toFixed(2));
        setCount(grades.length);
        setSortedGrades([...grades].sort((a, b) => a - b));
        setValue("true");
    };

    // Render
    return (
        <div className='container'>
            <h1>Grade Analyzer</h1>
            <p>Enter student grades (0-100) and analyze the results</p>
            <div className='input-section'>
                <input
                    type="number"
                    min={0}
                    max={100}
                    name="grade"
                    placeholder="Enter grade (0-100)"
                    value={newGrade}
                    onChange={(e) => setNewGrade(e.target.value)}
                />
                <button className='add' onClick={addGrade}>Add Grade</button>
                <button className='analyze' onClick={handleAnalyze}>Analyze Grades</button>
                <button className='clear' onClick={handleReset}>Reset</button>
            </div>

            <div className='grades-list'>
                <h3>Current Grades:</h3>
                <ul>
                    {grades.length === 0
                        ? <p>No grades added yet</p>
                        : grades.map((grade, index) => (
                            <li key={index}>
                                <span className='student-label'>Student {index + 1}:</span>
                                <span className={getBadgeClass(grade)}>{grade}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {value === "true" && (
                <div className='divider'>
                    <h3>Analysis Results</h3>
                    <div className='analysis'>
                        <h3>Basic Statistics</h3>
                        <p>Total Grades: {total}</p>
                        <p>Highest Grade: {highest}</p>
                        <p>Lowest Grade: {lowest}</p>
                        <p>Average Grade: {average}</p>
                    </div>
                    <div className='sorted-grades'>
                        <h3>Sorted Grades (Low to High)</h3>
                        <ul>
                            {sortedGrades.map((grade, index) => (
                                <li key={index}>
                                    <span className='student-label'>Grade {index + 1}:</span>
                                    <span className={getBadgeClass(grade)}>{grade}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='count'>
                        <h3>Passing Grades Only (≥ 40)</h3>
                        <ul>
                            {grades.filter(g => g >= 40).length === 0
                                ? <p>No passing grades yet</p>
                                : grades.filter(g => g >= 40).map((g, i) => (
                                    <li key={i}>
                                        <span className='student-label'>Grade {i + 1}:</span>
                                        <span className={getBadgeClass(g)}>{g}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='statistics'>
                            Passing Rate: {
                                grades.length === 0
                                    ? "0%"
                                    : `${Math.round((grades.filter(g => g >= 40).length / grades.length) * 100)}%`
                            }
                        </div>
                        <div className='statistics'>
                            Average of Passing Grades: {
                                grades.filter(g => g >= 40).length === 0
                                    ? 0
                                    : (
                                        (grades.filter(g => g >= 40).reduce((a, b) => a + b, 0)
                                            / grades.filter(g => g >= 40).length).toFixed(0)
                                    )
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Grade;
