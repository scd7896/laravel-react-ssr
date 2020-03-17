import { useEffect, useLayoutEffect } from 'react';

const useSSREffect = typeof window ==='undefined'? useLayoutEffect: useEffect;
export default useSSREffect;