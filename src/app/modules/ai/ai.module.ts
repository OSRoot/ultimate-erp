import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelManager } from './components/model-manager/model-manager';
import { InferenceEngine } from './components/inference-engine/inference-engine';
import { TrainingJobs } from './components/training-jobs/training-jobs';
import { ContextManager } from './components/context-manager/context-manager';
import { PolicyManager } from './components/policy-manager/policy-manager';
import { ModelHosting } from './components/model-hosting/model-hosting';
import { PerformanceMonitor } from './components/performance-monitor/performance-monitor';
import { AIRoutingModule } from './ai-routing.module';


@NgModule({
  declarations: [
    ModelManager,
    InferenceEngine,
    TrainingJobs,
    ContextManager,
    PolicyManager,
    ModelHosting,
    PerformanceMonitor
  ],
  imports: [
    CommonModule,
    AIRoutingModule
  ]
})
export class AIModule { }
