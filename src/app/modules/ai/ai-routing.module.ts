import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ModelManager } from './components/model-manager/model-manager';
// import { InferenceEngine } from './components/inference-engine/inference-engine';
// import { TrainingJobs } from './components/training-jobs/training-jobs';
// import { ContextManager } from './components/context-manager/context-manager';
// import { PolicyManager } from './components/policy-manager/policy-manager';
// import { ModelHosting } from './components/model-hosting/model-hosting';
// import { PerformanceMonitor } from './components/performance-monitor/performance-monitor';


const routes: Routes = [
  // { path: 'models', component: ModelManager },
  // { path: 'inference', component: InferenceEngine },
  // { path: 'training', component: TrainingJobs },
  // { path: 'context', component: ContextManager },
  // { path: 'policy', component: PolicyManager },
  // { path: 'hosting', component: ModelHosting },
  // { path: 'runtime-performance', component: PerformanceMonitor },
  // { path: '', redirectTo: 'models', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AIRoutingModule { }
