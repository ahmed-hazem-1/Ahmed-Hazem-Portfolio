import { useState, useEffect, useCallback } from "react";
import {
  BRAND_CYCLE,
  TYPE_SPEED,
  ERASE_SPEED,
  MS_PER_CHAR,
  MIN_DISPLAY,
} from "./constants";

type Phase = "typing" | "displaying" | "erasing";

export function useTypewriter() {
  const [text, setText] = useState("");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [charIndex, setCharIndex] = useState(0);

  const currentPhrase = BRAND_CYCLE[phaseIndex];

  const advancePhase = useCallback(() => {
    const nextIndex = (phaseIndex + 1) % BRAND_CYCLE.length;
    setPhaseIndex(nextIndex);
    setCharIndex(0);
    setPhase("typing");
  }, [phaseIndex]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPE_SPEED);
      } else {
        const displayTime = Math.max(MIN_DISPLAY, currentPhrase.length * MS_PER_CHAR);
        timeout = setTimeout(() => {
          setPhase("displaying");
        }, displayTime);
      }
    } else if (phase === "displaying") {
      timeout = setTimeout(() => {
        setPhase("erasing");
        setCharIndex(currentPhrase.length);
      }, MIN_DISPLAY);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, ERASE_SPEED);
      } else {
        advancePhase();
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, currentPhrase, advancePhase]);

  const isQuestion = currentPhrase.endsWith("?");

  return { text, isQuestion };
}