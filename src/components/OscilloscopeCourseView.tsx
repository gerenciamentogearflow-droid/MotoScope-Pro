import React, { useState, useEffect } from "react";
import { User } from "../types";
import { oscilloscopeCourse, CourseModule, CourseLesson } from "../data/oscilloscopeCourse";
import { ArrowLeft, CheckCircle2, PlayCircle, Award, Check, FileBadge2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "react-markdown";

interface OscilloscopeCourseViewProps {
  user: User;
  onBack: () => void;
}

export function OscilloscopeCourseView({ user, onBack }: OscilloscopeCourseViewProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [activeLesson, setActiveLesson] = useState<{ moduleId: string, lessonId: string } | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Load progress from local storage
  useEffect(() => {
    const savedLessons = localStorage.getItem(`course_progress_${user.id}`);
    if (savedLessons) {
      try {
        setCompletedLessons(JSON.parse(savedLessons));
      } catch (e) {
        console.error("Failed to load lesson progress");
      }
    }
    
    const savedQuizzes = localStorage.getItem(`course_quizzes_${user.id}`);
    if (savedQuizzes) {
      try {
        setCompletedQuizzes(JSON.parse(savedQuizzes));
      } catch (e) {
        console.error("Failed to load quiz progress");
      }
    }
  }, [user.id]);

  const saveProgress = (lessons: string[]) => {
    setCompletedLessons(lessons);
    localStorage.setItem(`course_progress_${user.id}`, JSON.stringify(lessons));
  };
  
  const saveQuizProgress = (quizzes: string[]) => {
    setCompletedQuizzes(quizzes);
    localStorage.setItem(`course_quizzes_${user.id}`, JSON.stringify(quizzes));
  };

  const markLessonCompleted = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      saveProgress([...completedLessons, lessonId]);
    }
  };
  
  const markQuizCompleted = (quizId: string) => {
    if (!completedQuizzes.includes(quizId)) {
      saveQuizProgress([...completedQuizzes, quizId]);
    }
  };

  const totalLessons = oscilloscopeCourse.reduce((acc, mod) => acc + mod.lessons.length + (mod.quiz ? 1 : 0), 0);
  const completedCount = completedLessons.length + completedQuizzes.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);
  const isCourseComplete = completedCount === totalLessons;

  const isModuleCompleted = (modIndex: number) => {
    const mod = oscilloscopeCourse[modIndex];
    if (!mod) return false;
    const allLessonsDone = mod.lessons.every(l => completedLessons.includes(l.id));
    const quizDone = mod.quiz ? completedQuizzes.includes(mod.quiz.id) : true;
    return allLessonsDone && quizDone;
  };

  const isModuleUnlocked = (modIndex: number) => {
    if (modIndex === 0) return true;
    for (let i = 0; i < modIndex; i++) {
      if (!isModuleCompleted(i)) return false;
    }
    return true;
  };

  if (showCertificate) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col p-6 items-center">
        <button
          onClick={() => setShowCertificate(false)}
          className="self-start mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar ao Treinamento
        </button>

        <div className="w-full max-w-4xl bg-white p-12 md:p-24 rounded-none shadow-2xl border-[16px] border-double border-gray-800 relative text-center">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
            <Award className="w-64 h-64" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-wider uppercase">
            Certificado de Conclusão
          </h1>
          <h2 className="text-xl md:text-2xl font-sans text-gray-600 mb-16 uppercase tracking-widest">
            MotoScope Pro - Especialista
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-serif mb-8">
            Certificamos que
          </p>

          <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 border-b-2 border-gray-300 pb-4 inline-block px-12">
            {user.username}
          </p>

          <p className="text-lg md:text-xl text-gray-700 font-serif max-w-2xl mx-auto leading-relaxed mb-24">
            Concluiu com êxito o treinamento completo de <strong>Diagnóstico Automotivo e Motociclístico com Osciloscópio</strong>,
            demonstrando proficiência em análise de ondas, leitura de sensores, atuadores e sistemas de ignição.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center px-12 mt-12 gap-12 md:gap-0">
            <div className="text-center">
              <div className="w-48 h-px bg-gray-800 mb-2"></div>
              <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">Data de Emissão</p>
              <p className="text-gray-800 font-serif">{new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg border-4 border-white outline outline-4 outline-red-600 rotate-12">
              <FileBadge2 className="w-10 h-10" />
            </div>

            <div className="text-center">
              <div className="w-48 h-px bg-gray-800 mb-2"></div>
              <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">Instrutor</p>
              <p className="text-gray-800 font-serif font-bold italic">MotoScope Pro</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => window.print()}
          className="mt-8 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold uppercase tracking-widest rounded-xl transition-colors shadow-lg"
        >
          Imprimir Certificado
        </button>
      </div>
    );
  }

  if (activeQuiz) {
    const module = oscilloscopeCourse.find(m => m.id === activeQuiz);
    if (!module || !module.quiz) return null;

    const quiz = module.quiz;
    
    // Check answers
    let allCorrect = false;
    if (quizSubmitted) {
      allCorrect = quiz.questions.every((q, idx) => quizAnswers[idx] === q.correctAnswerIndex);
    }

    const moduleIndex = oscilloscopeCourse.findIndex(m => m.id === module.id);
    const nextModule = oscilloscopeCourse[moduleIndex + 1];

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto w-full flex items-center gap-4">
            <button
              onClick={() => {
                setActiveQuiz(null);
                setQuizAnswers({});
                setQuizSubmitted(false);
              }}
              className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{module.title}</p>
              <h2 className="text-lg font-bold text-gray-900">{quiz.title}</h2>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-3xl mx-auto w-full p-6 py-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">{quiz.title}</h1>
            
            <div className="space-y-12">
              {quiz.questions.map((q, qIdx) => (
                <div key={qIdx}>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">{qIdx + 1}. {q.question}</h3>
                  <div className="space-y-3">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[qIdx] === optIdx;
                      const isCorrect = optIdx === q.correctAnswerIndex;
                      
                      let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                      
                      if (!quizSubmitted) {
                        btnClass += isSelected 
                          ? "border-blue-500 bg-blue-50 text-blue-800 font-medium shadow-sm" 
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700";
                      } else {
                        if (isCorrect) {
                          btnClass += "border-green-500 bg-green-50 text-green-800 font-bold";
                        } else if (isSelected && !isCorrect) {
                          btnClass += "border-red-500 bg-red-50 text-red-800";
                        } else {
                          btnClass += "border-gray-200 opacity-50";
                        }
                      }
                      
                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                          className={btnClass}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              {!quizSubmitted ? (
                <button
                  disabled={Object.keys(quizAnswers).length !== quiz.questions.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="w-full py-4 bg-blue-600 disabled:bg-gray-300 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
                >
                  Enviar Respostas
                </button>
              ) : (
                <div className="text-center">
                  {allCorrect ? (
                    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-6 h-6" /> Parabéns! Você acertou tudo.
                    </div>
                  ) : (
                    <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-xl font-bold">
                      Você não acertou todas as questões. Tente novamente!
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    {!allCorrect ? (
                      <button
                        onClick={() => {
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-xl transition-colors"
                      >
                        Refazer Prova
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          markQuizCompleted(quiz.id);
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                          
                          if (nextModule) {
                            setActiveLesson({ moduleId: nextModule.id, lessonId: nextModule.lessons[0].id });
                          } else {
                            setActiveQuiz(null);
                          }
                        }}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center gap-2"
                      >
                        {nextModule ? "Avançar para Próximo Módulo" : "Finalizar Treinamento"}
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (activeLesson) {
    const module = oscilloscopeCourse.find(m => m.id === activeLesson.moduleId);
    const lesson = module?.lessons.find(l => l.id === activeLesson.lessonId);
    
    if (!lesson || !module) return null;

    const lessonIndex = module.lessons.findIndex(l => l.id === lesson.id);
    const nextLesson = module.lessons[lessonIndex + 1];
    
    // Find next module first lesson if no next lesson in current module
    const moduleIndex = oscilloscopeCourse.findIndex(m => m.id === module.id);
    const nextModule = !nextLesson ? oscilloscopeCourse[moduleIndex + 1] : null;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto w-full flex items-center gap-4">
            <button
              onClick={() => setActiveLesson(null)}
              className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{module.title}</p>
              <h2 className="text-lg font-bold text-gray-900">{lesson.title}</h2>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-3xl mx-auto w-full p-6 py-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="max-w-none [&_h1]:font-bold [&_h1]:text-3xl [&_h1]:mb-6 [&_h1]:text-gray-900 [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-gray-900 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:text-gray-700 [&_li]:mb-2 [&_strong]:text-gray-900 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-blue-50 [&_blockquote]:py-2 [&_blockquote]:pr-4 [&_blockquote]:rounded-r-lg [&_blockquote]:my-6">
              <Markdown>{lesson.content}</Markdown>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button
              onClick={() => {
                markLessonCompleted(lesson.id);
                if (nextLesson) {
                  setActiveLesson({ moduleId: module.id, lessonId: nextLesson.id });
                } else if (module.quiz) {
                  setActiveLesson(null);
                  setActiveQuiz(module.id);
                } else if (nextModule) {
                  setActiveLesson({ moduleId: nextModule.id, lessonId: nextModule.lessons[0].id });
                } else {
                  setActiveLesson(null);
                }
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-2"
            >
              {nextLesson || module.quiz || nextModule ? "Marcar como Concluída e Avançar" : "Finalizar Treinamento"}
              <Check className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="pb-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl transition-colors active:scale-95 border border-gray-200/60 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Treinamento Básico
            </h2>
            <p className="text-sm text-gray-600">Treinamento básico</p>
          </div>
        </div>

        {isCourseComplete && (
          <button
            onClick={() => setShowCertificate(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Award className="w-5 h-5" />
            <span className="hidden sm:inline">Ver Certificado</span>
          </button>
        )}
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm mb-8">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h3 className="font-bold text-gray-900">Seu Progresso</h3>
            <p className="text-sm text-gray-600">{completedCount} de {totalLessons} concluídos</p>
          </div>
          <span className="text-2xl font-black text-blue-600">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {oscilloscopeCourse.map((module, mIdx) => {
          const isUnlocked = isModuleUnlocked(mIdx);

          return (
          <div key={module.id} className={`bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm ${!isUnlocked ? 'opacity-80' : ''}`}>
            <div className="bg-gray-50 border-b border-gray-200">
              {module.imageUrl ? (
                <div className="w-full h-48 md:h-64 relative">
                  <img src={module.imageUrl} alt={module.title} className={`w-full h-full object-cover ${!isUnlocked ? 'grayscale' : ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      {!isUnlocked && (
                        <div className="bg-gray-900/50 backdrop-blur text-white p-2 rounded-lg">
                          <Lock className="w-5 h-5" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-white shadow-sm">{module.title}</h3>
                    </div>
                    <p className="text-gray-100 mt-2 text-sm max-w-lg">{module.description}</p>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    {!isUnlocked && <Lock className="w-5 h-5 text-gray-500" />}
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-1">{module.description}</p>
                </div>
              )}
            </div>
            <div className="divide-y divide-gray-100">
              {module.lessons.map((lesson, lIdx) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    disabled={!isUnlocked}
                    onClick={() => setActiveLesson({ moduleId: module.id, lessonId: lesson.id })}
                    className={`w-full text-left p-4 sm:p-6 flex items-center justify-between group transition-colors ${isUnlocked ? 'hover:bg-gray-50' : 'cursor-not-allowed'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${!isUnlocked ? 'bg-gray-100 border-gray-200 text-gray-400' : isCompleted ? 'bg-green-100 border-green-500 text-green-600' : 'bg-gray-50 border-gray-300 text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500'}`}>
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <span className="font-bold">{lIdx + 1}</span>}
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${!isUnlocked ? 'text-gray-400' : isCompleted ? 'text-gray-900' : 'text-gray-700 group-hover:text-blue-600'}`}>
                        {lesson.title}
                      </span>
                    </div>
                    <div className={`transition-colors ${!isUnlocked ? 'text-gray-300' : 'text-gray-400 group-hover:text-blue-600'}`}>
                      {isUnlocked ? <PlayCircle className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                    </div>
                  </button>
                );
              })}
              {module.quiz && (
                <button
                  disabled={!isUnlocked}
                  onClick={() => {
                    setActiveQuiz(module.id);
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className={`w-full text-left p-4 sm:p-6 flex items-center justify-between group transition-colors ${isUnlocked ? 'hover:bg-blue-50/50 bg-slate-50' : 'bg-gray-50 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${!isUnlocked ? 'bg-gray-100 border-gray-200 text-gray-400' : completedQuizzes.includes(module.quiz.id) ? 'bg-green-100 border-green-500 text-green-600' : 'bg-white border-blue-200 text-blue-500 group-hover:border-blue-500'}`}>
                      {completedQuizzes.includes(module.quiz.id) ? <CheckCircle2 className="w-5 h-5" /> : <FileBadge2 className="w-5 h-5" />}
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${!isUnlocked ? 'text-gray-400' : completedQuizzes.includes(module.quiz.id) ? 'text-gray-900' : 'text-blue-900 group-hover:text-blue-600'}`}>
                      {module.quiz.title}
                    </span>
                  </div>
                  <div className={`transition-colors ${!isUnlocked ? 'text-gray-300' : 'text-blue-300 group-hover:text-blue-600'}`}>
                    {isUnlocked ? <PlayCircle className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                  </div>
                </button>
              )}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
