import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { SettingsProvider } from './context/SettingsContext';
import { CourseProvider } from './context/CourseContext';
import { AudioProvider } from './context/AudioContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';

import { SplashScreen } from './pages/SplashScreen';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { UnitsPage } from './pages/UnitsPage';
import { LessonOverviewPage } from './pages/LessonOverviewPage';
import { VocabularyPage } from './pages/VocabularyPage';
import { ModelPatternPage } from './pages/ModelPatternPage';
import { PracticePage } from './pages/PracticePage';
import { SpeakingPage } from './pages/SpeakingPage';
import { CompletedPage } from './pages/CompletedPage';
import { LearningReportPage } from './pages/LearningReportPage';
import { SettingsModal } from './pages/SettingsModal';

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleOpenSettings = () => setIsSettingsOpen(true);
  const handleCloseSettings = () => setIsSettingsOpen(false);

  return (
    <ErrorBoundary>
      <SettingsProvider>
        <AudioProvider>
          <AuthProvider>
            <ProgressProvider>
              <CourseProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/splash" element={<SplashScreen />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                      path="/home"
                      element={<HomePage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units"
                      element={<UnitsPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId"
                      element={<LessonOverviewPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId"
                      element={<LessonOverviewPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId/vocabulary"
                      element={<VocabularyPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId/model-pattern"
                      element={<ModelPatternPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId/practice"
                      element={<PracticePage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId/speaking"
                      element={<SpeakingPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/units/:unitId/lessons/:lessonId/completed"
                      element={<CompletedPage onOpenSettings={handleOpenSettings} />}
                    />
                    <Route
                      path="/report"
                      element={<LearningReportPage onOpenSettings={handleOpenSettings} />}
                    />
                    {/* Default fallback route */}
                    <Route path="*" element={<Navigate to="/splash" replace />} />
                  </Routes>

                  {/* Centralized Settings Modal */}
                  <SettingsModal isOpen={isSettingsOpen} onClose={handleCloseSettings} />
                </BrowserRouter>
              </CourseProvider>
            </ProgressProvider>
          </AuthProvider>
        </AudioProvider>
      </SettingsProvider>
    </ErrorBoundary>
  );
}
