import { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';

export function useChatScroll() {
  const containerRef = useRef(null); // ref for ScrollView

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollToEnd({ animated: true });
    }
  }, []);

  return { containerRef, scrollToBottom };
}
