import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Brain, Clock, Award, CheckCircle, X, RotateCcw } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Quiz = () => {
  const { category } = useParams();
  const { user, completeQuiz } = useUser();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);

  const quizzes = {
    history: [
      {
        title: "Ancient African Civilizations",
        questions: [
          {
            question: "Which ancient African kingdom was known for its gold trade?",
            options: ["Mali Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
            correct: 0
          },
          {
            question: "The Great Pyramid of Giza was built in which African country?",
            options: ["Sudan", "Libya", "Egypt", "Ethiopia"],
            correct: 2
          },
          {
            question: "Who was the famous ruler of the Mali Empire?",
            options: ["Cleopatra", "Mansa Musa", "Hannibal", "Shaka Zulu"],
            correct: 1
          },
          {
            question: "The Kingdom of Kush was located in present-day:",
            options: ["Egypt", "Sudan", "Ethiopia", "Libya"],
            correct: 1
          },
          {
            question: "Which African city was a major center of learning in medieval times?",
            options: ["Cairo", "Timbuktu", "Alexandria", "Carthage"],
            correct: 1
          }
        ]
      }
    ],
    agriculture: [
      {
        title: "Modern African Agriculture",
        questions: [
          {
            question: "Which crop is known as 'African rice'?",
            options: ["Oryza sativa", "Oryza glaberrima", "Zea mays", "Sorghum bicolor"],
            correct: 1
          },
          {
            question: "What is the most important factor for successful crop rotation?",
            options: ["Soil fertility", "Weather patterns", "Market prices", "Labor availability"],
            correct: 0
          },
          {
            question: "Which farming technique helps prevent soil erosion?",
            options: ["Monoculture", "Contour farming", "Overgrazing", "Deforestation"],
            correct: 1
          },
          {
            question: "The 'Green Revolution' in Africa focuses on:",
            options: ["Environmental protection", "Increased crop yields", "Organic farming", "Traditional methods"],
            correct: 1
          },
          {
            question: "Which is the most drought-resistant crop commonly grown in Africa?",
            options: ["Rice", "Wheat", "Sorghum", "Barley"],
            correct: 2
          }
        ]
      }
    ],
    technology: [
      {
        title: "Technology in Africa",
        questions: [
          {
            question: "Which mobile payment system originated in Kenya?",
            options: ["PayPal", "M-Pesa", "Venmo", "Alipay"],
            correct: 1
          },
          {
            question: "What does 'fintech' stand for?",
            options: ["Final Technology", "Financial Technology", "Finished Technology", "First Technology"],
            correct: 1
          },
          {
            question: "Which programming language is best for mobile app development?",
            options: ["HTML", "CSS", "JavaScript", "All of the above"],
            correct: 3
          },
          {
            question: "What is the main advantage of solar energy in Africa?",
            options: ["Low cost", "Abundant sunlight", "Easy installation", "Government support"],
            correct: 1
          },
          {
            question: "Which African country is known as the 'Silicon Savannah'?",
            options: ["Nigeria", "South Africa", "Kenya", "Ghana"],
            correct: 2
          }
        ]
      }
    ]
  };

  const availableQuizzes = category && quizzes[category as keyof typeof quizzes] 
    ? quizzes[category as keyof typeof quizzes] 
    : Object.values(quizzes).flat();

  const currentQuizData = availableQuizzes[currentQuiz];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, showResult]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuizData.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < currentQuizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowResult(true);
      const finalScore = selectedAnswer === currentQuizData.questions[currentQuestion].correct ? score + 1 : score;
      completeQuiz(`${category}-${currentQuiz}`, finalScore);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
    setQuizStarted(false);
  };

  const selectQuiz = (quizIndex: number) => {
    setCurrentQuiz(quizIndex);
    resetQuiz();
  };

  if (!quizStarted) {
    return (
      <div className="pt-20 pb-4">
        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Quiz
              </h1>
              <p className="text-lg text-gray-600">
                Test your knowledge and earn AFRAM tokens! Each correct answer = 0.2 AFRAM
              </p>
            </div>

            <div className="grid gap-6">
              {availableQuizzes.map((quiz, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-200 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{quiz.title}</h3>
                    <div className="flex items-center text-blue-600">
                      <Brain className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{quiz.questions.length} Questions</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>30s per question</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span>Up to {(quiz.questions.length * 0.2).toFixed(1)} AFRAM</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        selectQuiz(index);
                        startQuiz();
                      }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                      Start Quiz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (showResult) {
    const tokensEarned = score * 0.2;
    const percentage = (score / currentQuizData.questions.length) * 100;
    
    return (
      <div className="pt-20 pb-4">
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="mb-6">
                {percentage >= 70 ? (
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                ) : (
                  <X className="h-16 w-16 text-red-500 mx-auto mb-4" />
                )}
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Quiz Complete!
                </h2>
                <p className="text-lg text-gray-600">
                  {currentQuizData.title}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{score}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{percentage.toFixed(0)}%</div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">+{tokensEarned.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">AFRAM</div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={resetQuiz}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={() => setQuizStarted(false)}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Choose Different Quiz
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const question = currentQuizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuizData.questions.length) * 100;

  return (
    <div className="pt-20 pb-4">
      <section className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {currentQuizData.questions.length}
              </span>
              <div className="flex items-center text-blue-600">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{timeLeft}s</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-3 rounded-full font-medium transition-colors ${
                selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion < currentQuizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;