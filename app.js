// ==================== JAMB MASTER APP.JS ====================
// Main application logic for quiz, dashboard, and other interactive features

// ==================== QUIZ FUNCTIONALITY ====================
function loadQuestions() {
    const subject = document.getElementById('subject-select')?.value || '';
    const difficulty = document.getElementById('difficulty-select')?.value || '';

    if (!subject) {
        document.getElementById('quiz-container').innerHTML = '<p class="placeholder-text">Select a subject to begin practicing</p>';
        return;
    }

    // Get questions from questionsDB
    let questions = questionsDB[subject] || [];

    // Filter by difficulty if selected
    if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
    }

    if (questions.length === 0) {
        document.getElementById('quiz-container').innerHTML = '<p class="placeholder-text">No questions available for this selection</p>';
        return;
    }

    displayQuestions(questions);
}

function displayQuestions(questions) {
    let html = '<div class="questions-list">';
    
    questions.forEach((question, index) => {
        html += `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="difficulty-badge difficulty-${question.difficulty}">${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}</span>
                </div>
                <h3>${question.text}</h3>
                <div class="options">
        `;

        question.options.forEach((option, optionIndex) => {
            html += `
                <label class="option">
                    <input type="radio" name="question-${question.id}" value="${optionIndex}" data-question-id="${question.id}">
                    <span>${option}</span>
                </label>
            `;
        });

        html += `
                </div>
                <div class="explanation hidden" id="explanation-${question.id}">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    });

    html += `
        </div>
        <div class="quiz-actions">
            <button class="btn btn-primary" onclick="submitQuiz()">Submit Quiz</button>
            <button class="btn btn-secondary" onclick="resetQuiz()">Clear Answers</button>
        </div>
    `;

    document.getElementById('quiz-container').innerHTML = html;
    document.getElementById('quiz-results').style.display = 'none';
}

function submitQuiz() {
    const subject = document.getElementById('subject-select').value;
    const questions = questionsDB[subject];
    let correctCount = 0;
    const totalQuestions = questions.length;
    const answers = {};

    // Check answers
    questions.forEach(question => {
        const selected = document.querySelector(`input[name="question-${question.id}"]:checked`);
        if (selected) {
            const answer = parseInt(selected.value);
            answers[question.id] = answer;
            if (answer === question.correct) {
                correctCount++;
            }
            // Show explanation
            document.getElementById(`explanation-${question.id}`).classList.remove('hidden');
        }
    });

    // Calculate score
    const percentage = (correctCount / totalQuestions * 100).toFixed(2);
    const score = `${correctCount}/${totalQuestions}`;

    // Update user progress
    updateUserProgress(subject, correctCount, totalQuestions);

    // Display results
    displayResults({
        score,
        percentage,
        correctCount,
        totalQuestions,
        subject,
        answers
    });

    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });
}

function displayResults(results) {
    let resultHTML = `
        <div class="results-card">
            <h2>Quiz Results</h2>
            <div class="score-display">
                <div class="score-circle">
                    <span class="score-percentage">${results.percentage}%</span>
                </div>
                <div class="score-details">
                    <p><strong>Score:</strong> ${results.score}</p>
                    <p><strong>Subject:</strong> ${results.subject.charAt(0).toUpperCase() + results.subject.slice(1)}</p>
                    <p><strong>Correct Answers:</strong> ${results.correctCount}</p>
                </div>
            </div>
            <div class="result-feedback">
    `;

    if (results.percentage >= 80) {
        resultHTML += '<p class="feedback excellent">🎉 Excellent! Keep practicing to maintain this standard.</p>';
    } else if (results.percentage >= 60) {
        resultHTML += '<p class="feedback good">👍 Good job! Review weak areas to improve further.</p>';
    } else if (results.percentage >= 40) {
        resultHTML += '<p class="feedback fair">📚 Not bad, but you need more practice. Review the explanations.</p>';
    } else {
        resultHTML += '<p class="feedback poor">💪 Keep learning! Go through the study materials and try again.</p>';
    }

    resultHTML += `
            </div>
            <div class="result-actions">
                <button class="btn btn-primary" onclick="retakeQuiz()">Retake Quiz</button>
                <button class="btn btn-secondary" onclick="goToDashboard()">Go to Dashboard</button>
            </div>
        </div>
    `;

    document.getElementById('quiz-results').innerHTML = resultHTML;
    document.getElementById('quiz-results').style.display = 'block';
}

function resetQuiz() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);
    
    document.querySelectorAll('.explanation').forEach(exp => exp.classList.add('hidden'));
    
    alert('All answers cleared!');
}

function retakeQuiz() {
    document.getElementById('quiz-results').style.display = 'none';
    loadQuestions();
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

// ==================== USER PROGRESS TRACKING ====================
function updateUserProgress(subject, correctCount, totalQuestions) {
    const users = JSON.parse(localStorage.getItem('jambUsers')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser')) || {};
    
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex === -1) return;

    const user = users[userIndex];
    
    // Initialize progress object if needed
    if (!user.progress) {
        user.progress = {
            totalAttempted: 0,
            totalCorrect: 0,
            quizzesCompleted: 0,
            bySubject: {},
            activities: []
        };
    }

    // Update stats
    user.progress.totalAttempted += totalQuestions;
    user.progress.totalCorrect += correctCount;
    user.progress.quizzesCompleted += 1;

    // Track by subject
    if (!user.progress.bySubject[subject]) {
        user.progress.bySubject[subject] = { attempted: 0, correct: 0 };
    }
    user.progress.bySubject[subject].attempted += totalQuestions;
    user.progress.bySubject[subject].correct += correctCount;

    // Add activity
    const activity = {
        type: 'quiz',
        subject: subject,
        score: `${correctCount}/${totalQuestions}`,
        percentage: (correctCount / totalQuestions * 100).toFixed(2),
        date: new Date().toLocaleString()
    };

    if (!user.progress.activities) {
        user.progress.activities = [];
    }
    user.progress.activities.unshift(activity);
    if (user.progress.activities.length > 10) {
        user.progress.activities = user.progress.activities.slice(0, 10);
    }

    // Save updated user
    users[userIndex] = user;
    localStorage.setItem('jambUsers', JSON.stringify(users));
    localStorage.setItem('currentLoggedInUser', JSON.stringify(user));
}

// ==================== DASHBOARD FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    updateDashboard();
});

function updateDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));
    if (!currentUser) return;

    // Update user name
    const userNameEl = document.getElementById('user-name');
    if (userNameEl) userNameEl.textContent = currentUser.name || 'User';

    const progress = currentUser.progress || {};

    // Calculate accuracy
    const accuracy = progress.totalAttempted > 0 
        ? ((progress.totalCorrect / progress.totalAttempted) * 100).toFixed(1) 
        : 0;

    // Update stat cards
    const statElements = {
        'stat-questions': progress.totalAttempted || 0,
        'stat-correct': progress.totalCorrect || 0,
        'stat-accuracy': `${accuracy}%`,
        'stat-streak': progress.quizzesCompleted || 0
    };

    Object.keys(statElements).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = statElements[key];
        }
    });

    // Update subject performance
    displaySubjectPerformance(progress.bySubject || {});

    // Update activity feed
    displayActivityFeed(progress.activities || []);
}

function displaySubjectPerformance(bySubject) {
    const chartContainer = document.getElementById('subject-chart');
    if (!chartContainer) return;

    const subjects = ['english', 'math', 'physics', 'chemistry', 'biology'];
    let html = '';

    subjects.forEach(subject => {
        const data = bySubject[subject];
        const accuracy = data && data.attempted > 0 
            ? ((data.correct / data.attempted) * 100).toFixed(1) 
            : 0;
        
        html += `
            <div class="subject-performance">
                <div class="subject-name">${subject.charAt(0).toUpperCase() + subject.slice(1)}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${accuracy}%"></div>
                </div>
                <div class="subject-stats">
                    ${data ? `${data.correct}/${data.attempted}` : '0/0'}
                </div>
            </div>
        `;
    });

    chartContainer.innerHTML = html;
}

function displayActivityFeed(activities) {
    const feedContainer = document.getElementById('activity-feed');
    if (!feedContainer) return;

    if (activities.length === 0) {
        feedContainer.innerHTML = '<p class="no-activity">No activities yet. Start practicing!</p>';
        return;
    }

    let feedHTML = '';
    activities.forEach(activity => {
        feedHTML += `
            <div class="activity-item">
                <span class="activity-icon">📝</span>
                <div class="activity-details">
                    <p><strong>${activity.subject.charAt(0).toUpperCase() + activity.subject.slice(1)} Quiz</strong></p>
                    <p>${activity.score} (${activity.percentage}%)</p>
                    <small>${activity.date}</small>
                </div>
            </div>
        `;
    });

    feedContainer.innerHTML = feedHTML;
}

// ==================== MATERIALS FUNCTIONALITY ====================
function viewMaterial(subject) {
    const materials = {
        english: 'English Language includes: Grammar, Comprehension, Essay Writing, Vocabulary, and Literary Works.',
        math: 'Mathematics covers: Algebra, Geometry, Trigonometry, Calculus, and Statistics.',
        physics: 'Physics includes: Mechanics, Thermodynamics, Waves, Optics, Electricity and Magnetism.',
        chemistry: 'Chemistry covers: Inorganic Chemistry, Organic Chemistry, Physical Chemistry, and Analytical Chemistry.',
        biology: 'Biology includes: Cell Biology, Genetics, Ecology, Physiology, and Biochemistry.',
        literature: 'Literature in English covers: Prose, Poetry, Drama, Literary Criticism, and African Literature.'
    };

    const content = materials[subject] || 'Material not available';
    alert(`JAMB ${subject.charAt(0).toUpperCase() + subject.slice(1)} Materials\n\n${content}`);
}

// ==================== EXAM FUNCTIONALITY ====================
function startMockExam() {
    // Load all questions from all subjects
    const allQuestions = [];
    const subjects = ['english', 'math', 'physics', 'chemistry', 'biology'];
    
    subjects.forEach(subject => {
        allQuestions.push(...questionsDB[subject]);
    });

    // Shuffle questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    
    // Store for exam - we'll load them fresh in exam-taking.html
    sessionStorage.setItem('examStartTime', new Date().getTime());
    
    // Navigate to exam taking page
    window.location.href = 'exam-taking.html';
}

function viewPastExams() {
    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));
    if (!currentUser || !currentUser.progress || !currentUser.progress.activities) {
        alert('No past exams found. Start your first mock exam!');
        return;
    }

    const pastExams = currentUser.progress.activities.filter(a => a.type === 'exam');
    if (pastExams.length === 0) {
        alert('No past exams found.');
        return;
    }

    let examList = 'Past Mock Exams:\n\n';
    pastExams.forEach((exam, index) => {
        examList += `${index + 1}. ${exam.date}\n   Score: ${exam.score} (${exam.percentage}%)\n\n`;
    });

    alert(examList);
}

// ==================== SETTINGS FUNCTIONALITY ====================
function updateProfile(e) {
    if (e) e.preventDefault();
    
    const name = document.getElementById('profile-name')?.value;
    const email = document.getElementById('profile-email')?.value;
    const year = document.getElementById('profile-year')?.value;

    if (!name || !email) {
        alert('Please fill in all fields');
        return;
    }

    const users = JSON.parse(localStorage.getItem('jambUsers')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));
    
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].year = year;

        localStorage.setItem('jambUsers', JSON.stringify(users));
        localStorage.setItem('currentLoggedInUser', JSON.stringify(users[userIndex]));

        alert('Profile updated successfully!');
        location.reload();
    }
}

function changePassword(e) {
    if (e) e.preventDefault();

    const currentPassword = document.getElementById('current-password')?.value;
    const newPassword = document.getElementById('new-password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;

    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));
    if (currentUser.password !== currentPassword) {
        alert('Current password is incorrect');
        return;
    }

    const users = JSON.parse(localStorage.getItem('jambUsers')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('jambUsers', JSON.stringify(users));
        
        currentUser.password = newPassword;
        localStorage.setItem('currentLoggedInUser', JSON.stringify(currentUser));

        alert('Password changed successfully!');
        // Reset form
        document.getElementById('password-form')?.reset();
    }
}

function deleteAccount(e) {
    if (e) e.preventDefault();

    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));
    const users = JSON.parse(localStorage.getItem('jambUsers')) || [];
    
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        localStorage.setItem('jambUsers', JSON.stringify(users));
        localStorage.removeItem('currentLoggedInUser');

        alert('Account deleted successfully. Redirecting to login...');
        window.location.href = 'login.html';
    }
}

// ==================== LEADERBOARD FUNCTIONALITY ====================
function updateLeaderboard() {
    const users = JSON.parse(localStorage.getItem('jambUsers')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentLoggedInUser'));

    // Sort users by accuracy
    const sortedUsers = users
        .map(user => ({
            ...user,
            accuracy: user.progress?.totalAttempted > 0 
                ? ((user.progress.totalCorrect / user.progress.totalAttempted) * 100).toFixed(2) 
                : 0,
            quizzesCompleted: user.progress?.quizzesCompleted || 0
        }))
        .sort((a, b) => b.accuracy - a.accuracy);

    const leaderboardContainer = document.getElementById('leaderboard-list');
    if (!leaderboardContainer) return;

    let html = '<div class="leaderboard-header"><div class="rank-col">Rank</div><div class="name-col">Name</div><div class="score-col">Quizzes</div><div class="accuracy-col">Accuracy</div></div>';
    
    sortedUsers.slice(0, 10).forEach((user, index) => {
        html += `
            <div class="leaderboard-item ${user.email === currentUser?.email ? 'current-user' : ''}">
                <div class="rank-col">#${index + 1}</div>
                <div class="name-col">${user.name}</div>
                <div class="score-col">${user.quizzesCompleted}</div>
                <div class="accuracy-col">${user.accuracy}%</div>
            </div>
        `;
    });

    leaderboardContainer.innerHTML = html;

    // Update your rank
    const yourRankContainer = document.getElementById('your-rank');
    if (yourRankContainer && currentUser) {
        const yourRank = sortedUsers.findIndex(u => u.email === currentUser.email) + 1;
        const userAccuracy = sortedUsers.find(u => u.email === currentUser.email)?.accuracy || 0;
        
        yourRankContainer.innerHTML = `
            <h3>Your Rank</h3>
            <div class="rank-card">
                <p>Rank: <strong>#${yourRank}</strong></p>
                <p>Accuracy: <strong>${userAccuracy}%</strong></p>
                <p>Quizzes Completed: <strong>${currentUser.progress?.quizzesCompleted || 0}</strong></p>
            </div>
        `;
    }
}

function filterLeaderboard(filter) {
    // For now, just update the main leaderboard
    updateLeaderboard();
    console.log('Filtered by:', filter);
}
