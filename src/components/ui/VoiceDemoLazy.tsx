import { lazy, Suspense } from 'react';

const VoiceDemo = lazy(() => import('../VoiceDemo'));

export function VoiceDemoLazy() {
  return (
    <Suspense fallback={<div className="h-[400px] w-full flex items-center justify-center"><span className="text-sm text-neutral-400">Cargando...</span></div>}>
      <VoiceDemo />
    </Suspense>
  );
}
