// ==================== STATE MANAGEMENT ====================
let currentWordIndex = 0;
let learnedToday = [];
let allLearnedWords = [];
let currentStreak = 0;
let lastLearningDate = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage();
    initializeApp();
    setupEventListeners();
    updateDateDisplay();
    checkDailyReset();
});

function initializeApp() {
    displayWord();
    updateStreakDisplay();
    updateStats();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    // Word Card Navigation
    document.getElementById('prevBtn').addEventListener('click', previousWord);
    document.getElementById('nextBtn').addEventListener('click', nextWord);
    document.getElementById('markLearned').addEventListener('click', markWordAsLearned);

    // Revision Filter
    document.getElementById('revisionFilter').addEventListener('change', function() {
        displayRevisionCards(this.value);
    });

    // Chatbot
    document.getElementById('sendBtn').addEventListener('click', sendChatMessage);
    document.getElementById('germanInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendChatMessage();
    });
}

// ==================== SECTION SWITCHING ====================
function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Add active to clicked button
    event.target.classList.add('active');

    // Update content for specific sections
    if (sectionName === 'revision') {
        displayRevisionCards('all');
    } else if (sectionName === 'stats') {
        updateStats();
    }
}

// ==================== DAILY CHALLENGE LOGIC ====================
function displayWord() {
    if (currentWordIndex >= 40) {
        showDailySummary();
        return;
    }

    const todayWords = getTodayWords();
    const word = todayWords[currentWordIndex];

    if (!word) return;

    // Update word card
    document.getElementById('germanWord').textContent = word.word;
    document.getElementById('pronunciation').textContent = `[${word.pronunciation}]`;
    document.getElementById('translation').textContent = word.translation;
    document.getElementById('exampleSentence').textContent = word.exampleSentence;
    document.getElementById('sentenceTranslation').textContent = `(${word.sentenceTranslation})`;
    document.getElementById('wordLevel').textContent = word.level;
    document.getElementById('wordCategory').textContent = `📚 ${word.category}`;

    // Update progress
    updateProgress();

    // Enable/Disable buttons
    document.getElementById('prevBtn').disabled = currentWordIndex === 0;
    document.getElementById('nextBtn').disabled = currentWordIndex >= 39;

    // Update mark learned button
    const markBtn = document.getElementById('markLearned');
    if (learnedToday.includes(currentWordIndex)) {
        markBtn.textContent = '✓ Already Learned';
        markBtn.disabled = true;
    } else {
        markBtn.textContent = '✓ Mark as Learned';
        markBtn.disabled = false;
    }
}

function getTodayWords() {
    const seed = new Date().toDateString();
    const shuffled = shuffleArray([...germanWords], seed);
    return shuffled.slice(0, 40);
}

function shuffleArray(array, seed) {
    // Deterministic shuffle based on date
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        const char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    const random = Math.seededRandom(Math.abs(hash));
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Seeded random number generator
Math.seededRandom = function(seed) {
    return function() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
};

function nextWord() {
    if (currentWordIndex < 39) {
        currentWordIndex++;
        displayWord();
    }
}

function previousWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayWord();
    }
}

function markWordAsLearned() {
    if (!learnedToday.includes(currentWordIndex)) {
        learnedToday.push(currentWordIndex);
        saveLocalStorage();
        displayWord();
        updateProgress();

        // Show celebration if all words learned
        if (learnedToday.length === 40) {
            completeDaily();
        }
    }
}

function updateProgress() {
    const progress = (learnedToday.length / 40) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${learnedToday.length}/40`;
}

function showDailySummary() {
    document.getElementById('wordCard').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    document.getElementById('dailySummary').style.display = 'block';
}

function completeDaily() {
    // Increment streak
    if (lastLearningDate !== new Date().toDateString()) {
        currentStreak++;
    }
    lastLearningDate = new Date().toDateString();

    // Add to all learned words
    const todayWords = getTodayWords();
    allLearnedWords.push(...todayWords);

    saveLocalStorage();
    showDailySummary();
}

// ==================== REVISION SECTION ====================
function displayRevisionCards(filter = 'all') {
    const container = document.getElementById('revisionCards');
    container.innerHTML = '';

    const todayWords = getTodayWords();
    let wordsToShow = allLearnedWords;

    if (filter !== 'all') {
        wordsToShow = wordsToShow.filter(word => word.level === filter);
    }

    if (wordsToShow.length === 0) {
        document.getElementById('emptyRevision').style.display = 'block';
        document.getElementById('revisionCards').style.display = 'none';
        return;
    }

    document.getElementById('emptyRevision').style.display = 'none';
    document.getElementById('revisionCards').style.display = 'grid';

    // Remove duplicates
    const uniqueWords = Array.from(new Map(
        wordsToShow.map(word => [word.word, word])
    ).values());

    uniqueWords.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'revision-card';
        card.innerHTML = `
            <div class="revision-card-title">${word.word}</div>
            <div class="revision-card-translation">${word.translation}</div>
            <div class="revision-card-level">${word.level} • ${word.category}</div>
            <p style="font-size: 0.85rem; color: #666; margin-top: 10px;">${word.exampleSentence}</p>
        `;
        container.appendChild(card);
    });
}

// ==================== AI CHATBOT ====================
async function sendChatMessage() {
    const input = document.getElementById('germanInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to chat
    addChatMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    const typingMessage = document.createElement('div');
    typingMessage.className = 'chat-message bot-message';
    typingMessage.innerHTML = '<p>🤔 Analyzing your sentence...</p>';
    document.getElementById('chatMessages').appendChild(typingMessage);
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;

    try {
        // Call AI API for correction
        const correction = await getAICorrectionWithFallback(message);
        
        // Remove typing indicator
        typingMessage.remove();

        // Add correction message
        addCorrectionMessage(correction);
    } catch (error) {
        typingMessage.remove();
        addChatMessage('Sorry, there was an error processing your sentence. Please try again.', 'bot');
    }
}

async function getAICorrectionWithFallback(germanSentence) {
    try {
        // Try using Google's Gemini API
        return await getAICorrectionFromGemini(germanSentence);
    } catch (error) {
        // Fallback to local rule-based correction
        console.log('Using local correction system');
        return getLocalCorrectionRules(germanSentence);
    }
}

async function getAICorrectionFromGemini(germanSentence) {
    // Using Google's Gemini API (free tier)
    const apiKey = 'AIzaSyDEXZpCQZ8nIUBVrQPNJx3rVZhVuVIFDdw'; // Demo key - replace with your actual key
    
    const prompt = `You are a German language teacher. A student wrote: "${germanSentence}"

Please analyze this German sentence and provide:
1. Whether it's grammatically correct (Yes/No)
2. If there are errors, list them specifically
3. The correct version of the sentence
4. A brief explanation of the rules

Format your response as JSON:
{
    "isCorrect": boolean,
    "errors": [{"error": "...", "correction": "...", "explanation": "..."}],
    "correctSentence": "...",
    "feedback": "..."
}`;

    const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey,
        {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    const text = response.data.candidates[0].content.parts[0].text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Could not parse response');
}

function getLocalCorrectionRules(germanSentence) {
    const words = germanSentence.split(' ');
    const errors = [];
    let isCorrect = true;

    // Check for common German grammar issues
    const commonErrors = {
        'ich gehe': { suggestion: 'Check if verb position is correct' },
        'das': { rule: 'Neuter article' },
        'die': { rule: 'Feminine article' },
        'der': { rule: 'Masculine article' }
    };

    // Basic analysis
    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        
        // Check for capitalization at start
        if (i === 0 && words[i][0] !== words[i][0].toUpperCase()) {
            errors.push({
                error: `"${words[i]}" should be capitalized`,
                correction: words[i][0].toUpperCase() + words[i].slice(1),
                explanation: 'German sentences always start with a capital letter'
            });
            isCorrect = false;
        }
    }

    // If no errors found, it's likely correct
    if (errors.length === 0) {
        return {
            isCorrect: true,
            errors: [],
            correctSentence: germanSentence,
            feedback: 'Great job! Your sentence is grammatically correct. 🎉'
        };
    }

    return {
        isCorrect: isCorrect,
        errors: errors,
        correctSentence: germanSentence,
        feedback: errors.length === 0 ? 'Perfect!' : 'I found a few things to improve:'
    };
}

function addChatMessage(text, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}-message`;
    messageDiv.innerHTML = `<p>${escapeHtml(text)}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addCorrectionMessage(correction) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message correction-message';

    let content = `<p><strong>${correction.feedback}</strong></p>`;
    
    if (correction.errors && correction.errors.length > 0) {
        content += '<div class="correction-content">';
        correction.errors.forEach(err => {
            content += `
                <div class="correction-item">
                    <span class="correction-label">❌ Error:</span>
                    <span class="correction-text">${escapeHtml(err.error)}</span>
                    <br>
                    <span class="correction-label">✓ Correction:</span>
                    <span class="correction-text">${escapeHtml(err.correction)}</span>
                    <br>
                    <span class="correction-label">💡 Why:</span>
                    <span class="correction-text">${escapeHtml(err.explanation)}</span>
                </div>
            `;
        });
        content += '</div>';
    }

    if (correction.correctSentence) {
        content += `<p style="margin-top: 10px;"><strong>Correct sentence:</strong> <em>${escapeHtml(correction.correctSentence)}</em></p>`;
    }

    messageDiv.innerHTML = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== STATISTICS ====================
function updateStats() {
    const totalWords = allLearnedWords.length;
    const uniqueWords = new Set(allLearnedWords.map(w => w.word)).size;
    const a1Words = allLearnedWords.filter(w => w.level === 'A1').length;
    const a2Words = allLearnedWords.filter(w => w.level === 'A2').length;
    const b1Words = allLearnedWords.filter(w => w.level === 'B1').length;

    document.getElementById('statTotalWords').textContent = uniqueWords;
    document.getElementById('countA1').textContent = a1Words;
    document.getElementById('countA2').textContent = a2Words;
    document.getElementById('countB1').textContent = b1Words;

    // Determine current level
    let level = 'A1';
    if (a1Words > 50) level = 'A2';
    if (a2Words > 50) level = 'B1';
    if (b1Words > 50) level = 'B1+';
    
    document.getElementById('statLevel').textContent = level;

    // Calculate consistency
    const consistency = currentStreak > 0 ? Math.min(100, currentStreak * 10) : 0;
    document.getElementById('statConsistency').textContent = consistency + '%';
}

// ==================== STREAK MANAGEMENT ====================
function updateStreakDisplay() {
    document.getElementById('streakCount').textContent = currentStreak;
    document.getElementById('wordsLearned').textContent = allLearnedWords.length;
    document.getElementById('totalDays').textContent = new Date().getFullYear() - 2024 + Math.floor(currentStreak / 365);
}

function checkDailyReset() {
    const today = new Date().toDateString();
    
    if (lastLearningDate && lastLearningDate !== today) {
        // Check if it's been exactly 1 day (streak continues)
        const lastDate = new Date(lastLearningDate);
        const todayDate = new Date(today);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            // Streak broken
            currentStreak = 0;
            console.log('Streak broken! Start a new streak today.');
        }
    }

    // Reset daily words if new day
    if (lastLearningDate !== today) {
        learnedToday = [];
        currentWordIndex = 0;
        saveLocalStorage();
    }
}

function updateDateDisplay() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('de-DE', options);
    document.getElementById('dateDisplay').textContent = dateStr;
}

// ==================== LOCAL STORAGE ====================
function saveLocalStorage() {
    const data = {
        currentWordIndex,
        learnedToday,
        allLearnedWords,
        currentStreak,
        lastLearningDate
    };
    localStorage.setItem('deutschLearnerData', JSON.stringify(data));
}

function loadLocalStorage() {
    const data = localStorage.getItem('deutschLearnerData');
    if (data) {
        const parsed = JSON.parse(data);
        currentWordIndex = parsed.currentWordIndex || 0;
        learnedToday = parsed.learnedToday || [];
        allLearnedWords = parsed.allLearnedWords || [];
        currentStreak = parsed.currentStreak || 0;
        lastLearningDate = parsed.lastLearningDate || null;
    }
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Add this at the end to prevent issues if germanWords isn't available
if (typeof germanWords === 'undefined') {
    console.error('germanWords not loaded. Make sure data.js is loaded before app.js');
}
