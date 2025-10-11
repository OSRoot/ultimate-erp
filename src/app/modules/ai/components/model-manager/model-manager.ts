import { Component } from '@angular/core';

@Component({
  selector: 'app-model-manager',
  templateUrl: './model-manager.html',
  styleUrls: ['./model-manager.scss'],
  standalone:false
})
export class ModelManager {
  models = [
    { name: 'Mistral-7B', size: '7.1 GB', status: 'Idle' },
    { name: 'Phi-3-mini', size: '2.8 GB', status: 'Active' },
    { name: 'Llama-3-8B', size: '8.2 GB', status: 'Loaded' },
  ];

  activeCount = 1;
  vramUsage = 6.8;
  throughput = 189;
}
