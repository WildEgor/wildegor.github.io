/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { performance } from 'perf_hooks';

export function measure<T>(target: Function, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: T[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Call to ${propertyKey} took ${(end - start).toFixed(2)} milliseconds.`);
    return result;
  };

  return descriptor;
}
