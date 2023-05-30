import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      // useCallback จะช่วยลดการสร้างฟังก์ชันใหม่ในทุกครั้งที่เกิดการเรียกใช้งานคอมโพเนนต์ของ React ที่มีการเปลี่ยนแปลงของพารามิเตอร์เข้ามาในการเรียกใช้งานฟังก์ชันนั้น ซึ่งส่งผลให้เกิดประสิทธิภาพการทำงานที่ดีขึ้น
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
