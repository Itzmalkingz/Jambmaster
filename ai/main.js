// ==================== USER & AUTH SYSTEM ====================
// currentUser is declared in auth.js - don't redeclare it here
let users = JSON.parse(localStorage.getItem('jambUsers')) || [];
let currentPage = 'login';

// Check if user is logged in
function checkAuth() {
    const loggedInUser = localStorage.getItem('currentLoggedInUser');
    if (loggedInUser) {
        currentUser = JSON.parse(loggedInUser);
        showPage('dashboard');
    } else {
        showPage('login');
    }
}

// Note: handleLogin and handleSignup are now in auth.js with Supabase
// These old functions are commented out to avoid conflicts

/*
// Handle Login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentLoggedInUser', JSON.stringify(user));
        showPage('dashboard');
        updateDashboard();
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
}
*/

/*
// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const year = document.getElementById('signup-jamb-year').value;
    
    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        year,
        progress: {
            totalAttempted: 0,
            totalCorrect: 0,
            quizzesCompleted: 0,
            bySubject: {},
            activities: []
        }
    };
    
    users.push(newUser);
    localStorage.setItem('jambUsers', JSON.stringify(users));
    
    alert('Account created successfully! Please login.');
    switchToLogin();
}
*/

// Logout
function handleLogout(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        localStorage.removeItem('currentLoggedInUser');
        showPage('login');
    }
}

// Switch between login and signup
function switchToSignup() {
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('signup-page').classList.add('active');
}

function switchToLogin() {
    document.getElementById('signup-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
}

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const page = document.getElementById(pageId + '-page');
    if (page) {
        page.classList.add('active');
        currentPage = pageId;
        window.scrollTo(0, 0);
        
        if (pageId === 'dashboard') updateDashboard();
        if (pageId === 'leaderboard') updateLeaderboard();
        if (pageId === 'settings') loadSettings();
    }
}

function navigateTo(page) {
    if (!currentUser) {
        alert('Please login first');
        return;
    }
    showPage(page);
}

function toggleMenu() {
    // Mobile menu toggle
}

// ==================== JAMB QUESTIONS DATABASE ====================
    english: [
        {
            id: 1,
            difficulty: 'easy',
            text: 'Which of the following words is spelled correctly?',
            options: ['Occassion', 'Occasion', 'Ocasion', 'Occassion'],
            correct: 1,
            explanation: 'Occasion is the correct spelling. It means an important event or a suitable opportunity.'
        },
        {
            id: 2,
            difficulty: 'medium',
            text: 'Choose the word that best completes the sentence: "She showed great _____ in facing her problems."',
            options: ['Resilience', 'Resiliant', 'Resilent', 'Resilien'],
            correct: 0,
            explanation: 'Resilience (noun) is the correct form. It means the ability to recover quickly from difficulties.'
        },
        {
            id: 3,
            difficulty: 'hard',
            text: 'Which sentence uses the correct form of "who" or "whom"?',
            options: ['Who did you give the book to?', 'Whom is going to the party?', 'Who is she talking about?', 'She does not know who to ask to.'],
            correct: 2,
            explanation: '"Who is she talking about?" is correct. "Who" is the subject; "whom" is the object.'
        },
        {
            id: 4,
            difficulty: 'easy',
            text: 'What is the plural of "child"?',
            options: ['Childs', 'Children', 'Childes', 'Childer'],
            correct: 1,
            explanation: 'Children is the correct plural form of child. It is an irregular plural.'
        },
        {
            id: 5,
            difficulty: 'medium',
            text: 'Choose the sentence with correct grammar.',
            options: ['He have gone to school.', 'She have finished her work.', 'They has arrived late.', 'We have received your letter.'],
            correct: 3,
            explanation: '"We have received your letter" is grammatically correct. Use "have" with plural subjects.'
        }
    ],
    math [
        {
            id: 1,
            difficulty: 'easy',
            text: 'What is 25 + 15?',
            options: ['30', '40', '50', '35'],
            correct: 1,
            explanation: '25 + 15 = 40'
        },
        {
            id: 2,
            difficulty: 'easy',
            text: 'What is 12 × 5?',
            options: ['50', '60', '70', '80'],
            correct: 1,
            explanation: '12 × 5 = 60'
        },
        {
            id: 3,
            difficulty: 'medium',
            text: 'Solve for x: 2x + 5 = 13',
            options: ['x = 2', 'x = 4', 'x = 6', 'x = 8'],
            correct: 1,
            explanation: '2x + 5 = 13 → 2x = 8 → x = 4'
        },
        {
            id: 4,
            difficulty: 'medium',
            text: 'What is the area of a rectangle with length 8 and width 5?',
            options: ['13', '26', '40', '45'],
            correct: 2,
            explanation: 'Area = length × width = 8 × 5 = 40'
        },
        {
            id: 5,
            difficulty: 'hard',
            text: 'If 3x² - 12 = 0, what is x?',
            options: ['x = ±1', 'x = ±2', 'x = ±3', 'x = ±4'],
            correct: 2,
            explanation: '3x² - 12 = 0 → 3x² = 12 → x² = 4 → x = ±2'
        }
    ],
    physics [
        {
            id: 1,
            difficulty: 'easy',
            text: 'What is the SI unit of velocity?',
            options: ['m/s', 'km/h', 'ft/s', 'miles/h'],
            correct: 0,
            explanation: 'The SI unit of velocity is meters per second (m/s).'
        },
        {
            id: 2,
            difficulty: 'easy',
            text: 'What is the speed of light in vacuum?',
            options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁷ m/s'],
            correct: 0,
            explanation: 'The speed of light is approximately 3 × 10⁸ m/s.'
        },
        {
            id: 3,
            difficulty: 'medium',
            text: 'What does Ohm\'s law state?',
            options: ['V = I × R', 'V = I / R', 'V = I + R', 'V = I - R'],
            correct: 0,
            explanation: 'Ohm\'s law states that V = I × R, where V is voltage, I is current, and R is resistance.'
        },
        {
            id: 4,
            difficulty: 'medium',
            text: 'The force acting on an object is given by F = ma. This is:',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
            correct: 1,
            explanation: 'F = ma is Newton\'s Second Law of Motion.'
        },
        {
            id: 5,
            difficulty: 'hard',
            text: 'What is the relationship between frequency and wavelength?',
            options: ['c = f × λ', 'c = f / λ', 'c = f + λ', 'c = λ - f'],
            correct: 0,
            explanation: 'c = f × λ (speed = frequency × wavelength)'
        }
    ],
    chemistry [
        {
            id: 1,
            difficulty: 'easy',
            text: 'What is the atomic number of Carbon?',
            options: ['4', '6', '8', '12'],
            correct: 1,
            explanation: 'Carbon has atomic number 6 (6 protons in the nucleus).'
        },
        {
            id: 2,
            difficulty: 'easy',
            text: 'What is the chemical formula for table salt?',
            options: ['NaCl', 'Na₂Cl', 'NaCl₂', 'Na₂Cl₂'],
            correct: 0,
            explanation: 'The chemical formula for table salt is NaCl (Sodium Chloride).'
        },
        {
            id: 3,
            difficulty: 'medium',
            text: 'How many hydrogen atoms are in H₂SO₄?',
            options: ['2', '3', '4', '6'],
            correct: 0,
            explanation: 'H₂SO₄ (Sulfuric acid) contains 2 hydrogen atoms.'
        },
        {
            id: 4,
            difficulty: 'medium',
            text: 'What is the pH of a neutral solution?',
            options: ['5', '7', '9', '12'],
            correct: 1,
            explanation: 'A neutral solution has a pH of 7 at 25°C.'
        },
        {
            id: 5,
            difficulty: 'hard',
            text: 'Which of these is a strong electrolyte?',
            options: ['Acetic acid', 'Hydrochloric acid', 'Ammonia solution', 'Sugar solution'],
            correct: 1,
            explanation: 'Hydrochloric acid (HCl) is a strong electrolyte that fully dissociates in water.'
        }
    ],
    biology [
        {
            id: 1,
            difficulty: 'easy',
            text: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
            correct: 1,
            explanation: 'The mitochondria is called the powerhouse of the cell because it produces ATP.'
        },
        {
            id: 2,
            difficulty: 'easy',
            text: 'How many chambers does the human heart have?',
            options: ['2', '3', '4', '5'],
            correct: 2,
            explanation: 'The human heart has 4 chambers: 2 atria and 2 ventricles.'
        },
        {
            id: 3,
            difficulty: 'medium',
            text: 'What process do plants use to make food?',
            options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
            correct: 1,
            explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy.'
        },
        {
            id: 4,
            difficulty: 'medium',
            text: 'What is the basic unit of heredity?',
            options: ['DNA', 'Protein', 'Gene', 'Chromosome'],
            correct: 2,
            explanation: 'A gene is the basic unit of heredity that controls a specific trait.'
        },
        {
            id: 5,
            difficulty: 'hard',
            text: 'Which of the following is an example of a density-dependent factor?',
            options: ['Temperature', 'Rainfall', 'Competition', 'Tornado'],
            correct: 2,
            explanation: 'Competition is a density-dependent factor because its effect increases with population density.'
        }
    ]
;

// Global state
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function loadQuestions() {
    const subject = document.getElementById('subject-select').value;
    const difficulty = document.getElementById('difficulty-select').value;
    
    if (!subject) {
        document.getElementById('quiz-container').innerHTML = 
            '<p class="placeholder-text">Select a subject to begin practicing</p>';
        document.getElementById('quiz-results').style.display = 'none';
        return;
    }
    
    let questions = questionsDB[subject] || [];
    
    if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
    }
    
    currentQuiz = questions;
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    displayQuestions();
}

function displayQuestions() {
    const container = document.getElementById('quiz-container');
    
    if (currentQuiz.length === 0) {
        container.innerHTML = '<p class="placeholder-text">No questions available for this selection.</p>';
        return;
    }
    
    let html = '';
    
    currentQuiz.forEach((question, index) => {
        const isAnswered = index < currentQuestion;
        const isCurrentQuestion = index === currentQuestion;
        const displayStyle = isCurrentQuestion || isAnswered ? 'block' : 'none';
        
        html += `
            <div class="question" style="display: ${displayStyle}">
                <h4>Question ${index + 1} of ${currentQuiz.length}</h4>
                <p><strong>${question.text}</strong></p>
                <div class="options">
                    ${question.options.map((option, optIndex) => {
                        let optionClass = '';
                        
                        if (isAnswered) {
                            if (optIndex === question.correct) {
                                optionClass = 'correct';
                            } else if (optIndex === userAnswers[index] && userAnswers[index] !== question.correct) {
                                optionClass = 'incorrect';
                            }
                        } else if (isCurrentQuestion && userAnswers[index] !== undefined) {
                            if (optIndex === userAnswers[index]) {
                                optionClass = 'selected';
                            }
                        }
                        
                        return `
                            <label class="option ${optionClass}">
                                <input type="radio" name="question-${index}" value="${optIndex}" 
                                    ${userAnswers[index] === optIndex ? 'checked' : ''} 
                                    ${isAnswered ? 'disabled' : ''}
                                    onchange="selectAnswer(${index}, ${optIndex})">
                                ${option}
                            </label>
                        `;
                    }).join('')}
                </div>
                ${isAnswered ? `<p style="margin-top: 1rem; padding: 1rem; background: #f0f4ff; border-left: 4px solid #667eea;"><strong>Explanation:</strong> ${question.explanation}</p>` : ''}
            </div>
        `;
    });
    
    html += `
        <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            ${currentQuestion < currentQuiz.length - 1 ? 
                `<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>` :
                `<button class="btn btn-primary" onclick="submitQuiz()">Submit Quiz</button>`
            }
        </div>
    `;
    
    container.innerHTML = html;
    document.getElementById('quiz-results').style.display = 'none';
}

function selectAnswer(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
}

function nextQuestion() {
    if (currentQuestion < currentQuiz.length - 1) {
        currentQuestion++;
        displayQuestions();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestions();
    }
}

function submitQuiz() {
    score = 0;
    const subject = document.getElementById('subject-select').value;
    
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Update user progress
    currentUser.progress.totalAttempted += currentQuiz.length;
    currentUser.progress.totalCorrect += score;
    currentUser.progress.quizzesCompleted++;
    
    if (!currentUser.progress.bySubject[subject]) {
        currentUser.progress.bySubject[subject] = { attempted: 0, correct: 0 };
    }
    currentUser.progress.bySubject[subject].attempted += currentQuiz.length;
    currentUser.progress.bySubject[subject].correct += score;
    
    // Add activity
    currentUser.progress.activities.push({
        date: new Date().toLocaleDateString(),
        type: 'quiz',
        subject: subject,
        score: score,
        total: currentQuiz.length
    });
    
    saveUser();
    
    const percentage = Math.round((score / currentQuiz.length) * 100);
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    let html = '<h3>Quiz Results</h3>';
    html += `<p>Score: <strong>${score}/${currentQuiz.length}</strong></p>`;
    html += `<p>Percentage: <strong>${percentage}%</strong></p>`;
    
    html += '<hr style="margin: 2rem 0;"><h4>Detailed Review</h4>';
    
    currentQuiz.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        html += `
            <div style="margin: 2rem 0; padding: 1rem; background: ${isCorrect ? '#d4edda' : '#f8d7da'}; border-radius: 5px;">
                <h5>Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}</h5>
                <p><strong>${question.text}</strong></p>
                <p>Your answer: <strong>${question.options[userAnswers[index]] || 'Not answered'}</strong></p>
                <p>Correct answer: <strong>${question.options[question.correct]}</strong></p>
                <p><em>${question.explanation}</em></p>
            </div>
        `;
    });
    
    html += `
        <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-secondary" onclick="resetQuiz()">Try Again</button>
            <button class="btn btn-primary" onclick="loadQuestions()">Take Another Quiz</button>
        </div>
    `;
    
    document.getElementById('quiz-results').innerHTML = html;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    displayQuestions();
}

// ==================== DASHBOARD ====================
function updateDashboard() {
    if (!currentUser) return;
    
    document.getElementById('user-name').textContent = currentUser.name;
    
    const p = currentUser.progress;
    document.getElementById('stat-questions').textContent = p.totalAttempted;
    document.getElementById('stat-correct').textContent = p.totalCorrect;
    
    const accuracy = p.totalAttempted > 0 ? Math.round((p.totalCorrect / p.totalAttempted) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
    document.getElementById('stat-streak').textContent = '0';
    
    // Subject chart
    let chartHtml = '';
    const subjects = Object.keys(p.bySubject);
    
    if (subjects.length === 0) {
        chartHtml = '<p style="color: #999;">Start taking quizzes to see your performance chart.</p>';
    } else {
        subjects.forEach(subject => {
            const data = p.bySubject[subject];
            const percentage = Math.round((data.correct / data.attempted) * 100);
            chartHtml += `
                <div class="performance-item">
                    <div class="performance-item-name">${formatSubjectName(subject)}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="performance-item-score">${data.correct}/${data.attempted}</div>
                </div>
            `;
        });
    }
    
    document.getElementById('subject-chart').innerHTML = chartHtml;
    
    // Activity feed
    let activityHtml = '';
    if (p.activities.length === 0) {
        activityHtml = '<p style="color: #999;">No recent activities. Start practicing!</p>';
    } else {
        p.activities.slice(-5).reverse().forEach(activity => {
            activityHtml += `
                <div class="activity-item">
                    <strong>${activity.subject}</strong> - ${activity.score}/${activity.total} (${Math.round(activity.score/activity.total*100)}%) on ${activity.date}
                </div>
            `;
        });
    }
    
    document.getElementById('activity-feed').innerHTML = activityHtml;
}

// ==================== MATERIALS ====================
function viewMaterial(subject) {
    alert(`Loading ${formatSubjectName(subject)} materials...\n\nThis would display comprehensive study guides, video tutorials, and practice problems for the selected subject.`);
}

// ==================== MOCK EXAM ====================
function startMockExam() {
    alert('Starting mock examination...\n\nThis will be a full 3-hour exam with 180 questions across all subjects, simulating the actual JAMB exam experience.');
}

function viewPastExams() {
    const pastExamsHtml = `
        <div class="past-exams" style="margin-top: 2rem;">
            <h3>No Past Exams Yet</h3>
            <p>Your completed mock exams will appear here.</p>
        </div>
    `;
    document.getElementById('past-exams').innerHTML = pastExamsHtml;
}

// ==================== LEADERBOARD ====================
const mockLeaderboard = [
    { rank: 1, name: 'Chukwu Obinna', score: 285, accuracy: 95 },
    { rank: 2, name: 'Aisha Mohammed', score: 278, accuracy: 93 },
    { rank: 3, name: 'Emeka Nwosu', score: 271, accuracy: 90 },
    { rank: 4, name: 'Fatima Hassan', score: 265, accuracy: 88 },
    { rank: 5, name: 'David Okafor', score: 258, accuracy: 86 },
];

function updateLeaderboard() {
    let leaderboardHtml = '';
    
    mockLeaderboard.forEach(user => {
        leaderboardHtml += `
            <div class="leaderboard-row">
                <div class="rank-col">#${user.rank}</div>
                <div class="name-col">${user.name}</div>
                <div class="score-col">${user.score}</div>
                <div class="accuracy-col">${user.accuracy}%</div>
            </div>
        `;
    });
    
    document.getElementById('leaderboard-list').innerHTML = leaderboardHtml;
    
    // Calculate user's position
    const userScore = currentUser.progress.totalCorrect;
    let userRank = mockLeaderboard.filter(u => u.score > userScore).length + 1;
    const userAccuracy = currentUser.progress.totalAttempted > 0 
        ? Math.round((currentUser.progress.totalCorrect / currentUser.progress.totalAttempted) * 100)
        : 0;
    
    document.getElementById('your-rank').textContent = '#' + userRank;
    document.getElementById('your-leaderboard-score').textContent = userScore;
    document.getElementById('your-leaderboard-accuracy').textContent = userAccuracy + '%';
}

function filterLeaderboard(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateLeaderboard();
}

// ==================== SETTINGS ====================
function loadSettings() {
    if (!currentUser) return;
    
    document.getElementById('profile-name').value = currentUser.name;
    document.getElementById('profile-email').value = currentUser.email;
    document.getElementById('profile-year').value = currentUser.year;
}

function updateProfile(e) {
    e.preventDefault();
    
    currentUser.name = document.getElementById('profile-name').value;
    currentUser.email = document.getElementById('profile-email').value;
    currentUser.year = document.getElementById('profile-year').value;
    
    saveUser();
    alert('Profile updated successfully!');
}

function changePassword(e) {
    e.preventDefault();
    
    const current = document.getElementById('current-password').value;
    const newPass = document.getElementById('new-password').value;
    const confirm = document.getElementById('confirm-new-password').value;
    
    if (current !== currentUser.password) {
        alert('Current password is incorrect');
        return;
    }
    
    if (newPass !== confirm) {
        alert('New passwords do not match');
        return;
    }
    
    currentUser.password = newPass;
    saveUser();
    alert('Password changed successfully!');
    e.target.reset();
}

function deleteAccount() {
    if (confirm('Are you sure? This action cannot be undone.')) {
        const index = users.findIndex(u => u.id === currentUser.id);
        if (index > -1) {
            users.splice(index, 1);
            localStorage.setItem('jambUsers', JSON.stringify(users));
        }
        currentUser = null;
        localStorage.removeItem('currentLoggedInUser');
        alert('Account deleted successfully');
        showPage('login');
    }
}

// ==================== UTILITIES ====================
function saveUser() {
    const index = users.findIndex(u => u.id === currentUser.id);
    if (index > -1) {
        users[index] = currentUser;
        localStorage.setItem('jambUsers', JSON.stringify(users));
        localStorage.setItem('currentLoggedInUser', JSON.stringify(currentUser));
    }
}

function formatSubjectName(subject) {
    const names = {
        'english': 'English Language',
        'math': 'Mathematics',
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'biology': 'Biology'
    };
    return names[subject] || subject;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});
