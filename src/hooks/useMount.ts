/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from "react";

const useMount = (effect: EffectCallback): void => {
  useEffect(effect, []);
};

export { useMount };
