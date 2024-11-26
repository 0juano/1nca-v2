import { useState, useEffect } from 'react';

interface RateLimitConfig {
  maxAttempts: number;  // Maximum number of attempts allowed
  timeWindow: number;   // Time window in milliseconds
}

export function useRateLimit({ maxAttempts = 3, timeWindow = 3600000 }: RateLimitConfig) {
  const [attempts, setAttempts] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [lastAttemptTime, setLastAttemptTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    // Load stored values from localStorage
    const storedData = localStorage.getItem('formSubmissionData');
    if (storedData) {
      const { attempts: storedAttempts, lastAttemptTime: storedTime } = JSON.parse(storedData);
      const timePassed = Date.now() - storedTime;
      
      if (timePassed < timeWindow) {
        setAttempts(storedAttempts);
        setLastAttemptTime(storedTime);
        setIsBlocked(storedAttempts >= maxAttempts);
        setRemainingTime(timeWindow - timePassed);
      } else {
        // Reset if time window has passed
        localStorage.removeItem('formSubmissionData');
      }
    }
  }, [maxAttempts, timeWindow]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (remainingTime > 0 && isBlocked) {
      timer = setInterval(() => {
        setRemainingTime(prev => {
          const newTime = prev - 1000;
          if (newTime <= 0) {
            setIsBlocked(false);
            setAttempts(0);
            localStorage.removeItem('formSubmissionData');
            clearInterval(timer);
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [remainingTime, isBlocked]);

  const incrementAttempt = () => {
    const newAttempts = attempts + 1;
    const currentTime = Date.now();
    
    setAttempts(newAttempts);
    setLastAttemptTime(currentTime);
    
    localStorage.setItem('formSubmissionData', JSON.stringify({
      attempts: newAttempts,
      lastAttemptTime: currentTime
    }));

    if (newAttempts >= maxAttempts) {
      setIsBlocked(true);
      setRemainingTime(timeWindow);
    }
  };

  return {
    isBlocked,
    remainingTime,
    incrementAttempt,
    attemptsLeft: maxAttempts - attempts
  };
} 